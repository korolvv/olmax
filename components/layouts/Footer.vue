<template>
    <footer class="main-footer footer d-flex  align-items-center">
        <data-btn :groups="['layout_footer']" class="container">
            <div class="row justify-content-between">
            <div class="col d-flex align-items-center">
                <span class="footer-link text-grey">{{$GD('layout_footer.date')}}</span>
            </div>
            <div class="col-auto d-flex flex-center">
                <a  :href="$GD('layout_footer.fb')" target="_blank" class="icon-wrapper-fb transition-color">
                                    <simple-svg
                                        ref="navigation"
                                        :filepath="'/svg/fb.svg'"
                                        class="icon "
                                    />
                                </a>

                    <a :href="$GD('layout_footer.in')" target="_blank" class="icon-wrapper-in transition-color">
                                    <simple-svg
                                        ref="navigation"
                                        :filepath="'/svg/in.svg'"
                                        class="icon "
                                    />
                                </a>
            </div>
            <div class="col text-right  d-flex align-items-center justify-content-end">
                <a href="http://beststart.net" target="_blank" class="footer-link text-grey">
                Made by <span class="text-blue d-none d-sm-inline">BestStart</span>
                <span class="text-blue d-sm-none">BS</span>
                </a>
            </div>
            </div>
        </data-btn>

    </footer>
</template>
