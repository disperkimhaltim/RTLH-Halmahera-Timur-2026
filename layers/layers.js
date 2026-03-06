var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_ADM_BatasDesa_Haltim_1 = new ol.format.GeoJSON();
var features_ADM_BatasDesa_Haltim_1 = format_ADM_BatasDesa_Haltim_1.readFeatures(json_ADM_BatasDesa_Haltim_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_BatasDesa_Haltim_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_BatasDesa_Haltim_1.addFeatures(features_ADM_BatasDesa_Haltim_1);
var lyr_ADM_BatasDesa_Haltim_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_BatasDesa_Haltim_1, 
                style: style_ADM_BatasDesa_Haltim_1,
                popuplayertitle: 'ADM_Batas Desa_Haltim',
                interactive: true,
                title: '<img src="styles/legend/ADM_BatasDesa_Haltim_1.png" /> ADM_Batas Desa_Haltim'
            });
var format_RTLHWAILUKUM_2 = new ol.format.GeoJSON();
var features_RTLHWAILUKUM_2 = format_RTLHWAILUKUM_2.readFeatures(json_RTLHWAILUKUM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTLHWAILUKUM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTLHWAILUKUM_2.addFeatures(features_RTLHWAILUKUM_2);
var lyr_RTLHWAILUKUM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTLHWAILUKUM_2, 
                style: style_RTLHWAILUKUM_2,
                popuplayertitle: 'RTLH WAILUKUM',
                interactive: true,
                title: '<img src="styles/legend/RTLHWAILUKUM_2.png" /> RTLH WAILUKUM'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ADM_BatasDesa_Haltim_1.setVisible(true);lyr_RTLHWAILUKUM_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ADM_BatasDesa_Haltim_1,lyr_RTLHWAILUKUM_2];
lyr_ADM_BatasDesa_Haltim_1.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'Id': 'Id', 'FID_Batas_': 'FID_Batas_', 'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'SUMBER': 'SUMBER', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KM': 'KM', 'Desa': 'Desa', });
lyr_RTLHWAILUKUM_2.set('fieldAliases', {'Id': 'Id', 'Nama_KK': 'Nama_KK', 'No_KK': 'No_KK', 'NIK': 'NIK', 'Alamat': 'Alamat', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kep_Sertif': 'Kep_Sertif', 'Luas_Tanah': 'Luas_Tanah', 'Koor_X': 'Koor_X', 'Koor_Y': 'Koor_Y', 'FOTO': 'FOTO', });
lyr_ADM_BatasDesa_Haltim_1.set('fieldImages', {'FID_Admini': 'TextEdit', 'Id': 'Range', 'FID_Batas_': 'TextEdit', 'OBJECTID': 'TextEdit', 'KECAMATAN': 'TextEdit', 'SUMBER': 'TextEdit', 'LUAS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KM': 'TextEdit', 'Desa': 'TextEdit', });
lyr_RTLHWAILUKUM_2.set('fieldImages', {'Id': 'Range', 'Nama_KK': 'TextEdit', 'No_KK': 'TextEdit', 'NIK': 'TextEdit', 'Alamat': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kep_Sertif': 'TextEdit', 'Luas_Tanah': 'TextEdit', 'Koor_X': 'TextEdit', 'Koor_Y': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_ADM_BatasDesa_Haltim_1.set('fieldLabels', {'FID_Admini': 'no label', 'Id': 'no label', 'FID_Batas_': 'no label', 'OBJECTID': 'no label', 'KECAMATAN': 'no label', 'SUMBER': 'no label', 'LUAS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KM': 'no label', 'Desa': 'inline label - always visible', });
lyr_RTLHWAILUKUM_2.set('fieldLabels', {'Id': 'no label', 'Nama_KK': 'inline label - always visible', 'No_KK': 'inline label - always visible', 'NIK': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kep_Sertif': 'inline label - always visible', 'Luas_Tanah': 'inline label - always visible', 'Koor_X': 'inline label - always visible', 'Koor_Y': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_RTLHWAILUKUM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});