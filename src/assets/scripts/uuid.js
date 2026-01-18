const MAX_COUNT = 5000;

const $generateBtn = $('#generate-uuid-btn');
const $countInput = $('#uuid-count-input');
const $uuidOutput = $('#uuid-output');
const $copyAllBtn = $('#copy-all-btn');

$(document).ready(function () {
    $generateBtn.on('click', generateUuids);
    $copyAllBtn.on('click', copyAllUuids);

    $countInput.on('input', function () {
        const value = parseInt($(this).val());
        if (value > MAX_COUNT) {
            $(this).val(MAX_COUNT);
        }
    });
});

function generateUuids() {
    const count = parseInt($countInput.val());

    if (count < 1 || count > MAX_COUNT) {
        alert(`Please enter a number between 1 and ${MAX_COUNT}`);
        return;
    }

    displayUuids(generateUuidV7(count));
}

function displayUuids(uuids) {
    if (uuids.length > 0) {
        $copyAllBtn.prop('disabled', false);
        $uuidOutput.addClass('has-content');
    } else {
        $copyAllBtn.prop('disabled', true);
        $uuidOutput.removeClass('has-content');
    }

    $uuidOutput.text(uuids.join('\n'));
}


async function copyAllUuids() {
    if ($copyAllBtn.prop('disabled')) {
        return;
    }
    
    const uuidText = $uuidOutput.text();

    if (!uuidText.trim()) {
        return;
    }

    try {
        await navigator.clipboard.writeText(uuidText);

        $copyAllBtn.text('All Copied!');
        setTimeout(() => {
            $copyAllBtn.text('Copy All');
        }, 2000);

    } catch (err) {
        console.error('Failed to copy all UUIDs: ', err);
        const $textArea = $('<textarea>').val(uuidText);
        $('body').append($textArea);
        $textArea.select();
        document.execCommand('copy');
        $textArea.remove();

        $copyAllBtn.text('All Copied!');
        setTimeout(() => {
            $copyAllBtn.text('Copy All');
        }, 2000);
    }
}

const UNIX_TS_MS_BITS = 48n;
const VERSION_BITS = 4n;
const VERSION = 7n;
const SEQUENCE_BITS = 12n;
const VARIANT = 0b10;
const VARIANT_BITS = 2n;
const RANDOM_BITS = 62n;
const MAX_SEQUENCE = 4096;

function generateUuidV7(number) {
    let previousTimestamp = -1;
    let seq = 0;
    const result = [];
    const rand = new Uint32Array(2);

    for (let i = 0; i < number; i++) {
        const timestamp = Math.max(Date.now(), previousTimestamp);
        if (timestamp === previousTimestamp) {
            seq++;
            if (seq >= MAX_SEQUENCE) {
                timestamp++;
                seq = 0;
            }
        } else {
            seq = 0;
        }
        previousTimestamp = timestamp;

        crypto.getRandomValues(rand);

        let uuidBits = 0n;
        uuidBits |= BigInt(timestamp) & ((1n << UNIX_TS_MS_BITS) - 1n);

        uuidBits <<= VERSION_BITS;
        uuidBits |= VERSION;

        uuidBits <<= SEQUENCE_BITS;
        uuidBits |= BigInt(seq);

        uuidBits <<= VARIANT_BITS;
        uuidBits |= BigInt(VARIANT);

        const combinedRandom = (BigInt(rand[0]) << 32n) | BigInt(rand[1]);
        const maskedRandom = combinedRandom & ((1n << RANDOM_BITS) - 1n);
        uuidBits <<= RANDOM_BITS;
        uuidBits |= maskedRandom;

        const hexString = uuidBits.toString(16).padStart(32, '0');

        const uuidv7 =
            hexString.slice(0, 8) + '-' +
            hexString.slice(8, 12) + '-' +
            hexString.slice(12, 16) + '-' +
            hexString.slice(16, 20) + '-' +
            hexString.slice(20);

        result.push(uuidv7);
    }
    return result;
}
