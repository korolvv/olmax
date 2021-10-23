<template>
    <div>
        <div class="marg2"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <breadcrumbs group="contacts_head"> </breadcrumbs>
                </div>
            </div>
        </div>
        <div class="marg2"></div>
        <div class="row  no-gutters d-sm-none">
            <div class="col-12">
                <info-mobile></info-mobile>
    
            </div>
        </div>
        <div class="row no-gutters justify-content-between d-none d-sm-flex">
    
            <div class="col-4 d-flex">
                <div class="title-box-wrapp box-contacts">
                    <div class="row no-gutters w-100">
                        <div class="col-3 d-flex">
                            <div class="title-tringle--left-long"></div>
                        </div>
                        <div class="col-9 d-flex">
                            <data-btn :groups="['contacts_info1']" class="title-box d-flex flex-center" ref="addres" @mouseover="mapTop" @mouseout="mapReturn">
                                <div class="d-flex flex-center box-contacts-inner">
                                    <div class="icon-wrapper-contacts2-large ">
                                        <simple-svg ref="navigation" :filepath="'/svg/contact_icon1.svg'" class="icon icon-blue">
                                        </simple-svg>
                                    </div>
                                </div>
    
                                <div class="box-contacts-inner flex-column justify-content-around flex-center">
                                    <div class="text-bold">{{$GD('contacts_info1.title')}}</div>
                                    <div class="">{{$GD('contacts_info1.desc')}}</div>
                                </div>
                            </data-btn>
                            <div class="title-tringle--right-r"></div>
                        </div>
                    </div>
                </div>
    
            </div>
    
            <div class="col-3 d-flex mx-auto">
                <div class="title-box-wrapp box-contacts--top">
                    <div class="title-tringle--left"></div>
                    <data-btn :groups="['contacts_info2']" class="title-box d-flex flex-center">
    
                        <div class="d-flex flex-center box-contacts-inner">
                            <div class="icon-wrapper-contacts2-large ">
                                <simple-svg ref="navigation" :filepath="'/svg/contact_icon2.svg'" class="icon icon-blue">
                                </simple-svg>
                            </div>
                        </div>
    
                        <div class="box-contacts-inner flex-column justify-content-around flex-center">
                            <div class="text-bold">{{$GD('contacts_info2.title')}}</div>
                            <div class="">{{$GD('contacts_info2.desc')}}</div>
                        </div>
    
                    </data-btn>
                    <div class="title-tringle--right"></div>
                </div>
            </div>
    
            <div class="col-4 d-flex">
                <div class="title-box-wrapp box-contacts--right">
                    <div class="row no-gutters w-100">
    
                        <div class="col-9 d-flex">
                            <div class="title-tringle--left-r"></div>
                            <data-btn :groups="['contacts_info3']" class="title-box d-flex flex-center">
    
                                <div class="d-flex flex-center box-contacts-inner">
                                    <div class="icon-wrapper-contacts2-large ">
                                        <simple-svg ref="navigation" :filepath="'/svg/contact_icon3.svg'" class="icon icon-blue">
                                        </simple-svg>
                                    </div>
                                </div>
    
                                <div class="box-contacts-inner flex-column justify-content-around flex-center">
                                    <div class="text-bold">{{$GD('contacts_info3.title')}}</div>
                                    <div class="">{{$GD('contacts_info3.desc')}}</div>
                                </div>
    
                            </data-btn>
    
                        </div>
                        <div class="col-3 d-flex">
                            <div class="title-tringle--right-long"></div>
                        </div>
                    </div>
                </div>
    
            </div>
    
        </div>
        <div class=" box-content container" style="position: relative">
    
            <div class="box-back"></div>
    
            <div class="container s-contacts">
    
                <div class="marg15"></div>
                <div class="row justify-content-between">
                    <div class="col  d-flex justify-content-center">
    
                        <div class="s-form  d-flex flex-center">
                            <div class="s-inner">
                                <div class="row flex-nowrap ">
                                    <div class="col">
                                        <form-custom url="/feedback/api/new-feedback" groupInfo="contacts_form_info" groupItem="contacts_form" ></form-custom>
                                    </div>
    
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="marg"></div>
            <div class="container s-contacts">
                <div class="row">
                    <div class="col" ref="map-wrapp">
                        <div ref="map" id="map" style="height: 400px; transition: all 0.3s;" class="w-100 media-bg-tr08 box-shadow-white-lg box-border1"></div>
    
                    </div>
                </div>
            </div>
            <div class="marg"></div>
        </div>
    
    </div>
</template>

<script>
import infoMobile from '~/components/contacts/info-mobile';
import FormCustom from '~/components/layouts/FormCustom';
export default {
    auth: false,
    head() {
        return {
            title: this.$GD('contacts_head.title')
        }
    },
    mounted() {
        var self = this;
        setTimeout(function() {
            var inputElement = document.getElementById('map');
            var uluru = {
                lat: 50.433936,
                lng: 30.543641
            };
            self.map = new self.$google.maps.Map(inputElement, {
                zoom: 15,
                center: uluru,
                /*mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                        'styled_map'
                    ]
                }*/
            });

            self.initMap();
        }, 1000)

    },

    components: {
        'info-mobile': infoMobile,
        FormCustom
    },
    data() {
        return {

            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        };
    },

    methods: {
        mapTop() {
            var map = this.$refs['map-wrapp'].getBoundingClientRect();
            var form = this.$refs.form.getBoundingClientRect();
            var height = map.top - form.top;

            this.$refs.map.style.transform = "translateY(-" + height + "px)";
            this.$refs.map.style.opacity = '1';
        },
        mapReturn() {
            this.$refs.map.style.transform = "translateY(0px)";
            this.$refs.map.style.opacity = '0.8';
        },
        initMap() {

            // Create a new StyledMapType object, passing it an array of styles,
            // and the name to be displayed on the map type control.
            var self = this;
            var styledMapType = new this.$google.maps.StyledMapType(
                [{
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#003D76"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#002B53"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#29768a"
                            },
                            {
                                "lightness": -37
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#406d80"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#406d80"
                        }]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                                "visibility": "off"
                            },
                            {
                                "color": "#3e606f"
                            },
                            {
                                "weight": 2
                            },
                            {
                                "gamma": 0.84
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [{
                                "weight": 0.6
                            },
                            {
                                "color": "#1a3541"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#2c5a71"
                        }]
                    }
                ], {
                    name: 'Styled Map'
                });

            // Create a map object, and include the MapTypeId to add
            // to the map type control.
            var uluru = {
                lat: 50.433936,
                lng: 30.543641
            };

            var image = {
                url: '/marker.png',
                // This marker is 20 pixels wide by 32 pixels high.
                /* size: new self.$google.maps.Size(60, 60),
                 // The origin for this image is (0, 0).
                 origin: new self.$google.maps.Point(0, 0),
                 // The anchor for this image is the base of the flagpole at (0, 32).
                 anchor: new self.$google.maps.Point(30, 30)*/
            };
            var marker = new self.$google.maps.Marker({
                position: uluru,
                map: self.map,
                icon: image,
                title: 'ОЛМАКС СИСТЕМС'

            });

            //Associate the styled map with the MapTypeId and set it to display.
            this.map.mapTypes.set('styled_map', styledMapType);
            this.map.setMapTypeId('styled_map');
        }

    }
};
</script>
