<template>
    <!-- spinner -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<style scoped>
#spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primaryColor);
    font-size: 10rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease-out, visibility 0s linear 1s;
    z-index: 99999;
}

#spinner.show {
    transition: opacity 1s ease-out, visibility 0s linear 0s;
    visibility: visible;
    opacity: 1;
}
</style>

<script>
import $ from 'jquery'
export default {
    created() {
        // Spinner
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > -1) {
                    $('#spinner').removeClass('show');
                }
            }, -1);
        };
        spinner(-1);

    }
}
</script>