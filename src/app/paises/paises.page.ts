import { Component, OnInit, ViewChild } from '@angular/core';
import {NativeAudio} from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {

    private paisesM = [
      {
        imageURL: 'http://anthemworld.com/flags/Afghanistan.gif',
        orden: '1',
        nombre: 'Afganistán',
        oficialName: 'La República Islámica del Afganistán',
        s2: 'AF',
        s3: 'AFG',
        codigo: '004',
        himno: 'http://www.nationalanthems.info/af.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/African%20Union.gif',
        orden: '2',
        nombre: 'Unión Africana',
        oficialName: 'Unión Africana',
        s2: 'ZA',
        s3: 'ZAF',
        codigo: '710',
        himno:'http://www.nationalanthems.info/za.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Albania.gif',
        orden: '3',
        nombre: 'Albania',
        oficialName: 'La República de Albania',
        s2: 'AL',
        s3: 'ALB',
        codigo: '008',
        himno:'http://www.nationalanthems.info/al.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Germany.gif',
        orden: '4',
        nombre: 'Alemania',
        oficialName: 'La República Federal de Alemania',
        s2: 'DE',
        s3: 'DEU',
        codigo: '276',
        himno:'http://www.nationalanthems.info/de.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Andorra.gif',
        orden: '5',
        nombre: 'Andorra',
        oficialName: 'El Principado de Andorra',
        s2: 'AD',
        s3: 'AND',
        codigo: '020',
        himno:'http://www.nationalanthems.info/ad.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Angola.gif',
        orden: '6',
        nombre: 'Angola',
        oficialName: 'La República de Angola',
        s2: 'AO',
        s3: 'AGO',
        codigo: '024',
        himno:'http://www.nationalanthems.info/ao.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Antigua%20and%20Barbuda.gif',
        orden: '7',
        nombre: 'Antigua y Barbuda',
        oficialName: 'Antigua y Barbuda',
        s2: 'AG',
        s3: 'ATG',
        codigo: '028',
        himno:'http://www.nationalanthems.info/ag.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Saudi%20Arabia.gif',
        orden: '8',
        nombre: 'Arabia Saudita',
        oficialName: 'El Reino de la Arabia Saudita',
        s2: 'SA',
        s3: 'SAU',
        codigo: '682',
        himno:'http://www.nationalanthems.info/sa.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Algeria.gif',
        orden: '9',
        nombre: 'Argelia',
        oficialName: 'La República Argelina Democrática y Popular',
        s2: 'DZ',
        s3: 'DZA',
        codigo: '012',
        himno: 'http://www.nationalanthems.info/dz.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Argentina.gif',
        orden: '10',
        nombre: 'Argentina',
        oficialName: 'La República Argentina ',
        s2: 'AR',
        s3: 'ARG',
        codigo: '032', 
        himno: 'http://www.nationalanthems.info/ar.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Armenia.gif',
        orden: '11',
        nombre: 'Armenia',
        oficialName: 'La República de Armenia',
        s2: 'AM',
        s3: 'ARM',
        codigo: '51',
        himno:'http://www.nationalanthems.info/am.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Australia.gif',
        orden: '12',
        nombre: 'Australia',
        oficialName: 'Australia',
        s2: 'AU',
        s3: 'AUS',
        codigo: '036',
        himno:'http://www.nationalanthems.info/au.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Austria.gif',
        orden: '13',
        nombre: 'Austria',
        oficialName: 'La República de Austria',
        s2: 'AT',
        s3: 'AUT',
        codigo: '040',
        himno:'http://www.nationalanthems.info/at.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Azerbaijan.gif',
        orden: '14',
        nombre: 'Azerbaiyán',
        oficialName: 'La República de Azerbaiyán',
        s2: 'AZ ',
        s3: 'AZE',
        codigo: '31',
        himno:'http://www.nationalanthems.info/az.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Bahamas.gif',
        orden: '15',
        nombre: 'Bahamas',
        oficialName: 'El Commonwealth de las Bahamas',
        s2: 'BS',
        s3: 'BHS',
        codigo: '044',
        himno:'http://www.nationalanthems.info/bs.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Bahrain.gif',
        orden: '16',
        nombre: 'Bahrein',
        oficialName: 'El Reino de Bahrein',
        s2: 'BH',
        s3: 'BHR',
        codigo: '048',
        himno:'http://www.nationalanthems.info/bh.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Bangladesh.gif',
        orden: '17',
        nombre: 'Bangladesh',
        oficialName: 'La República Popular de Bangladesh',
        s2: 'BD',
        s3: 'BGD',
        codigo: '050',
        himno:'http://www.nationalanthems.info/bd.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Barbados.gif',
        orden: '18',
        nombre: 'Barbados',
        oficialName: 'Barbados',
        s2: 'BB',
        s3: 'BRB',
        codigo: '052',
        himno:'http://www.nationalanthems.info/bb.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Belarus.gif',
        orden: '19',
        nombre: 'Belarús',
        oficialName: 'La República de Belarús',
        s2: 'BY',
        s3: 'BLR',
        codigo: '112',
        himno:'http://www.nationalanthems.info/by.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Belgium.gif',
        orden: '20',
        nombre: 'Bélgica',
        oficialName: 'El Reino de Bélgica',
        s2: 'BE',
        s3: 'BEL',
        codigo: '056',
        himno:'http://www.nationalanthems.info/be.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Belize.gif',
        orden: '21',
        nombre: 'Belice',
        oficialName: 'Belice',
        s2: 'BZ',
        s3: 'BLZ',
        codigo: '084',
        himno:'http://www.nationalanthems.info/bz.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Benin.gif',
        orden: '22',
        nombre: 'Benin',
        oficialName: 'La República de Benin',
        s2: 'BJ',
        s3: 'BEN',
        codigo: '204',
        himno:'http://www.nationalanthems.info/bj.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Bhutan.gif',
        orden: '23',
        nombre: 'Bhután',
        oficialName: 'El Reino de Bhután',
        s2: 'BT',
        s3: 'BTN',
        codigo: '064',
        himno:'http://www.nationalanthems.info/bt.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Bolivia.gif',
        orden: '24',
        nombre: 'Bolivia',
        oficialName: 'Estado Plurinacional de Bolivia',
        s2: 'BO',
        s3: 'BOL',
        codigo: '068',
        himno:'http://www.nationalanthems.info/bo.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Bosnia-Herzegovina.gif',
        orden: '25',
        nombre: 'Bosnia y Herzegovina',
        oficialName: 'Bosnia y Herzegovina',
        s2: 'BA',
        s3: 'BIH',
        codigo: '070',
        himno:'http://www.nationalanthems.info/ba.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Botswana.gif',
        orden: '26',
        nombre: 'Botswana',
        oficialName: 'La República de Botswana',
        s2: 'BW',
        s3: 'BWA',
        codigo: '072',
        himno:'http://www.nationalanthems.info/bw.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Brazil.gif',
        orden: '27',
        nombre: 'Brasil',
        oficialName: 'La República Federativa del Brasil',
        s2: 'BR',
        s3: 'BRA',
        codigo: '076',
        himno:'http://www.nationalanthems.info/br.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Brunei.gif',
        orden: '28',
        nombre: 'Brunei Darussalam',
        oficialName: 'Brunei Darussalam',
        s2: 'BN',
        s3: 'BRN',
        codigo: '096',
        himno:'http://www.nationalanthems.info/bn.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Bulgaria.gif',
        orden: '29',
        nombre: 'Bulgaria',
        oficialName: 'La República de Bulgaria',
        s2: 'BG',
        s3: 'BGR',
        codigo: '100',
        himno:'http://www.nationalanthems.info/bg.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Burkina%20Faso.gif',
        orden: '30',
        nombre: 'Burkina Faso',
        oficialName: 'Burkina Faso',
        s2: 'BF',
        s3: 'BFA',
        codigo: '854',
        himno:'http://www.nationalanthems.info/bf.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Burundi.gif',
        orden: '31',
        nombre: 'Burundi',
        oficialName: 'La República de Burundi',
        s2: 'BI',
        s3: 'BDI',
        codigo: '108',
        himno:'http://www.nationalanthems.info/bi.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Cape%20Verde.gif',
        orden: '32',
        nombre: 'Cabo Verde',
        oficialName: 'La República de Cabo Verde',
        s2: 'CV',
        s3: 'CPV',
        codigo: '132',
        himno:'http://www.nationalanthems.info/cv.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Cameroon.gif',
        orden: '33',
        nombre: 'Camerún',
        oficialName: 'La República del Camerún',
        s2: 'CM',
        s3: 'CMR',
        codigo: '120',
        himno:'http://www.nationalanthems.info/cm.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Cambodia.gif',
        orden: '34',
        nombre: 'Camboya',
        oficialName: 'La República de Camboya',
        s2: 'KH',
        s3: 'KHM',
        codigo: '116',
        himno:'http://www.nationalanthems.info/kh.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Canada.gif',
        orden: '35',
        nombre: 'Canadá',
        oficialName: 'Canadá',
        s2: 'CA',
        s3: 'CAN',
        codigo: '124',
        himno:'http://www.nationalanthems.info/ca.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Chad.gif',
        orden: '36',
        nombre: 'Chad',
        oficialName: 'La República del Chad',
        s2: 'TD',
        s3: 'TCD',
        codigo: '148',
        himno:'http://www.nationalanthems.info/td.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Czech.gif',
        orden: '37',
        nombre: 'Chequia',
        oficialName: 'La República Checa',
        s2: 'CZ',
        s3: 'CZE',
        codigo: '203',
        himno:'http://www.nationalanthems.info/cz.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Chile.gif',
        orden: '38',
        nombre: 'Chile',
        oficialName: 'La República de Chile',
        s2: 'CL',
        s3: 'CHL',
        codigo: '152',
        himno:'http://www.nationalanthems.info/cl.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/China.gif',
        orden: '39',
        nombre: 'China',
        oficialName: 'La República Popular China',
        s2: 'CN',
        s3: 'CHN',
        codigo: '156',
        himno:'http://www.nationalanthems.info/cn.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Cyprus.gif',
        orden: '40',
        nombre: 'Chipre',
        oficialName: 'La República de Chipre',
        s2: 'CY',
        s3: 'CYP',
        codigo: '196',
        himno:'http://www.nationalanthems.info/gr.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Colombia.gif',
        orden: '41',
        nombre: 'Colombia',
        oficialName: 'La República de Colombia',
        s2: 'CO',
        s3: 'COL',
        codigo: '170',
        himno:'http://www.nationalanthems.info/co.mp3'
      },
      {
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
        orden: '42',
        nombre: 'Congo',
        oficialName: 'La República del Congo',
        s2: 'CG',
        s3: 'COG',
        codigo: '178',
        himno:'http://www.nationalanthems.info/cg.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Costa%20Rica.gif',
        orden: '43',
        nombre: 'Costa Rica',
        oficialName: 'La República de Costa Rica',
        s2: 'CR',
        s3: 'CRI',
        codigo: '188',
        himno:'http://www.nationalanthems.info/cr.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Croatia.gif',
        orden: '44',
        nombre: 'Croacia',
        oficialName: 'La República de Croacia',
        s2: 'HR',
        s3: 'HRV',
        codigo: '191',
        himno:'http://www.nationalanthems.info/hr.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Cuba.gif',
        orden: '45',
        nombre: 'Cuba',
        oficialName: 'La República de Cuba',
        s2: 'CU',
        s3: 'CUB',
        codigo: '192',
        himno:'http://www.nationalanthems.info/cu.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Cote%20dIvoire.gif',
        orden: '46',
        nombre: 'Côte dIvoire',
        oficialName: 'La República de Côte dIvoire',
        s2: 'CI',
        s3: 'CIV',
        codigo: '384',
        himno:'http://www.nationalanthems.info/ci.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Comoros.gif',
        orden: '47',
        nombre: 'Comoras',
        oficialName: 'La Unión de las Comoras',
        s2: 'KM',
        s3: 'COM',
        codigo: '174',
        himno:'http://www.nationalanthems.info/km.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Denmark.gif',
        orden: '48',
        nombre: 'Dinamarca',
        oficialName: 'El Reino de Dinamarca',
        s2: 'DK',
        s3: 'DNK',
        codigo: '208',
        himno:'http://www.nationalanthems.info/dk.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Djibouti.gif',
        orden: '49',
        nombre: 'Djibouti',
        oficialName: 'La República de Djibouti',
        s2: 'DJ',
        s3: 'DJI',
        codigo: '262',
        himno:'http://www.nationalanthems.info/dj.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Dominica.gif',
        orden: '50',
        nombre: 'Dominica',
        oficialName: 'El Commonwealth de Dominica',
        s2: 'DM',
        s3: 'DMA',
        codigo: '212',
        himno:'http://www.nationalanthems.info/dm.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Egypt.gif',
        orden: '51',
        nombre: 'Egipto',
        oficialName: 'La República Árabe de Egipto',
        s2: 'EG',
        s3: 'EGY',
        codigo: '818',
        himno:'http://www.nationalanthems.info/eg.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/El%20Salvador.gif',
        orden: '52',
        nombre: 'El Salvador',
        oficialName: 'La República de El Salvador',
        s2: 'SV',
        s3: 'SLV',
        codigo: '222',
        himno:'http://www.nationalanthems.info/sv.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/United%20Arab%20Emirates.gif',
        orden: '53',
        nombre: 'Emiratos Árabes Unidos',
        oficialName: 'Los Emiratos Árabes Unidos',
        s2: 'AE',
        s3: 'ARE',
        codigo: '784',
        himno:'http://www.nationalanthems.info/ae.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Equador.gif',
        orden: '54',
        nombre: 'Ecuador',
        oficialName: 'La República del Ecuador',
        s2: 'EC',
        s3: 'ECU',
        codigo: '218',
        himno:'http://www.nationalanthems.info/ec.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Eritrea.gif',
        orden: '55',
        nombre: 'Eritrea',
        oficialName: 'El Estado de Eritrea',
        s2: 'ER',
        s3: 'ERI',
        codigo: '232',
        himno:'http://www.nationalanthems.info/er.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Slovakia.gif',
        orden: '56',
        nombre: 'Eslovaquia',
        oficialName: 'La República Eslovaca',
        s2: 'SK',
        s3: 'SVK',
        codigo: '703',
        himno:'http://www.nationalanthems.info/sk.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Slovenia.gif',
        orden: '57',
        nombre: 'Eslovenia',
        oficialName: 'La República de Eslovenia',
        s2: 'SI',
        s3: 'SVN',
        codigo: '705',
        himno:'http://www.nationalanthems.info/si.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Spain.gif',
        orden: '58',
        nombre: 'España',
        oficialName: 'El Reino de España',
        s2: 'ES',
        s3: 'ESP',
        codigo: '724',
        himno:'http://www.nationalanthems.info/es%20short.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/U.S.A.gif',
        orden: '59',
        nombre: 'Estados Unidos de América',
        oficialName: 'Los Estados Unidos de América',
        s2: 'US',
        s3: 'USA',
        codigo: '840',
        himno:'http://www.nationalanthems.info/us.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Estonia.gif',
        orden: '60',
        nombre: 'Estonia',
        oficialName: 'La República de Estonia',
        s2: 'EE',
        s3: 'EST',
        codigo: '233',
        himno:'http://www.nationalanthems.info/ee.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Swaziland.gif',
        orden: '61',
        nombre: 'Eswatini',
        oficialName: 'El Reino de Eswatini',
        s2: 'SZ',
        s3: 'SWZ',
        codigo: '748',
        himno:'http://www.nationalanthems.info/sz.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Ethiopia.gif',
        orden: '62',
        nombre: 'Etiopía',
        oficialName: 'La República Democrática Federal de Etiopía',
        s2: 'ET',
        s3: 'ETH',
        codigo: '231',
        himno:'http://www.nationalanthems.info/et.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Fiji.gif',
        orden: '63',
        nombre: 'Fiji',
        oficialName: 'La República de Fiji',
        s2: 'FJ',
        s3: 'FJI',
        codigo: '242',
        himno:'http://www.nationalanthems.info/fj.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Philippines.gif',
        orden: '64',
        nombre: 'Filipinas',
        oficialName: 'La República de Filipinas',
        s2: 'PH',
        s3: 'PHL',
        codigo: '608',
        himno:'http://www.nationalanthems.info/ph.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Finland.gif',
        orden: '65',
        nombre: 'Finlandia',
        oficialName: 'La República de Finlandia',
        s2: 'FI',
        s3: 'FIN',
        codigo: '246',
        himno:'http://www.nationalanthems.info/fi.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/France.gif',
        orden: '66',
        nombre: 'Francia',
        oficialName: 'La República Francesa',
        s2: 'FR',
        s3: 'FRA',
        codigo: '250',
        himno:'http://www.nationalanthems.info/fr.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Gabon.gif',
        orden: '67',
        nombre: 'Gabón',
        oficialName: 'La República Gabonesa',
        s2: 'GA',
        s3: 'GAB',
        codigo: '266',
        himno:'http://www.nationalanthems.info/ga.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Gambia.gif',
        orden: '68',
        nombre: 'Gambia',
        oficialName: 'La República de Gambia',
        s2: 'GM',
        s3: 'GMB',
        codigo: '270',
        himno:'http://www.nationalanthems.info/gm.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Ghana.gif',
        orden: '69',
        nombre: 'Ghana',
        oficialName: 'La República de Ghana',
        s2: 'GH',
        s3: 'GHA',
        codigo: '288',
        himno:'http://www.nationalanthems.info/gh.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Georgia.gif',
        orden: '70',
        nombre: 'Georgia',
        oficialName: 'Georgia',
        s2: 'GE',
        s3: 'GEO',
        codigo: '268',
        himno:'http://www.nationalanthems.info/ge.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/United%20Kingdom.gif',
        orden: '71',
        nombre: 'Gran Bretaña',
        oficialName: 'Reino Unido de Gran Bretaña',
        s2: 'GB',
        s3: 'GBR',
        codigo: '826',
        himno:'http://www.nationalanthems.info/gb.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Grenada.gif',
        orden: '72',
        nombre: 'Granada',
        oficialName: 'Granada',
        s2: 'GD',
        s3: 'GRD',
        codigo: '308',
        himno:'http://www.nationalanthems.info/gd.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Greece.gif',
        orden: '73',
        nombre: 'Grecia',
        oficialName: 'La República Helénica',
        s2: 'GR',
        s3: 'GRC',
        codigo: '300',
        himno:'http://www.nationalanthems.info/gr.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Greenland.gif',
        orden: '74',
        nombre: 'Groenlandia',
        oficialName: 'Groenlandia Kalaallit Nunaat',
        s2: 'GL',
        s3: 'GRL',
        codigo: '304',
        himno:'http://www.nationalanthems.info/gl.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Guatemala.gif',
        orden: '75',
        nombre: 'Guatemala',
        oficialName: 'La República de Guatemala',
        s2: 'GT',
        s3: 'GTM',
        codigo: '320',
        himno:'http://www.nationalanthems.info/gt.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Guyana.gif',
        orden: '76',
        nombre: 'Guyana',
        oficialName: 'La República Cooperativa de Guyana',
        s2: 'GY',
        s3: 'GUY',
        codigo: '328',
        himno:'http://www.nationalanthems.info/gy.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Guniea.gif',
        orden: '77',
        nombre: 'Guinea',
        oficialName: 'La República de Guinea',
        s2: 'GN',
        s3: 'GIN',
        codigo: '324',
        himno:'http://www.nationalanthems.info/gn.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Equatorial%20Guinea.gif',
        orden: '78',
        nombre: 'Guinea Ecuatorial',
        oficialName: 'La República de Guinea Ecuatorial',
        s2: 'GQ',
        s3: 'GNQ',
        codigo: '226',
        himno:'http://www.nationalanthems.info/gq.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Guinea-Bissau.gif',
        orden: '79',
        nombre: 'Guinea Bissau',
        oficialName: 'La República de Guinea-Bissau',
        s2: 'GW',
        s3: 'GNB',
        codigo: '624',
        himno:'http://www.nationalanthems.info/gw.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Haiti.gif',
        orden: '80',
        nombre: 'Haití',
        oficialName: 'La República de Haití',
        s2: 'HT',
        s3: 'HTI',
        codigo: '332',
        himno:'http://www.nationalanthems.info/ht.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Honduras.gif',
        orden: '81',
        nombre: 'Honduras',
        oficialName: 'La República de Honduras',
        s2: 'HN',
        s3: 'HND',
        codigo: '340',
        himno:'http://www.nationalanthems.info/hn.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Hungary.gif',
        orden: '82',
        nombre: 'Hungría',
        oficialName: 'Hungría',
        s2: 'HU',
        s3: 'HUN',
        codigo: '348',
        himno:'http://www.nationalanthems.info/hu.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/India.gif',
        orden: '83',
        nombre: 'India',
        oficialName: 'La República de la India',
        s2: 'IN',
        s3: 'IND',
        codigo: '356',
        himno:'http://www.nationalanthems.info/in.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Indonesia.gif',
        orden: '84',
        nombre: 'Indonesia',
        oficialName: 'La República de Indonesia',
        s2: 'ID',
        s3: 'IDN',
        codigo: '360',
        himno:'http://www.nationalanthems.info/id.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Iran.gif',
        orden: '85',
        nombre: 'Irán',
        oficialName: 'La República Islámica del Irán',
        s2: 'IR',
        s3: 'IRN',
        codigo: '364',
        himno:'http://www.nationalanthems.info/ir.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Iraq.gif',
        orden: '86',
        nombre: 'Iraq',
        oficialName: 'La República del Iraq',
        s2: 'IQ',
        s3: 'IRQ',
        codigo: '368',
        himno:'http://www.nationalanthems.info/iq.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Ireland.gif',
        orden: '87',
        nombre: 'Irlanda',
        oficialName: 'Irlanda',
        s2: 'IE',
        s3: 'IRL',
        codigo: '372', 
        himno:'http://www.nationalanthems.info/ie.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Iceland.gif',
        orden: '88',
        nombre: 'Islandia',
        oficialName: 'La República de Islandia',
        s2: 'IS',
        s3: 'ISL',
        codigo: '352',
        himno:'http://www.nationalanthems.info/is.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Cook%20Islands.gif',
        orden: '89',
        nombre: 'Islas Cook',
        oficialName: 'Las Islas Cook',
        s2: 'CK',
        s3: 'COK',
        codigo: '184',
        himno:'http://www.nationalanthems.info/ck.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Faroe%20Islands.gif',
        orden: '90',
        nombre: 'Islas Feroe',
        oficialName: 'Las Islas Feroe',
        s2: 'FO',
        s3: 'FRO',
        codigo: '234',
        himno:'http://www.nationalanthems.info/fo.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Marshall%20Islands.gif',
        orden: '91',
        nombre: 'Islas Marshall',
        oficialName: 'la República de las Islas Marshall',
        s2: 'MH',
        s3: 'MHL',
        codigo: '584',
        himno:'http://www.nationalanthems.info/mh.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Solomon%20Islands.gif',
        orden: '92',
        nombre: 'Islas Salomón',
        oficialName: 'Las Islas Salomón',
        s2: 'SB',
        s3: 'SLB',
        codigo: '090',
        himno:'http://www.nationalanthems.info/sb.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Israel.gif',
        orden: '93',
        nombre: 'Israel',
        oficialName: 'El Estado de Israel',
        s2: 'IL',
        s3: 'ISR',
        codigo: '376',
        himno:'http://www.nationalanthems.info/il.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Italy.gif',
        orden: '94',
        nombre: 'Italia',
        oficialName: 'La República Italiana',
        s2: 'IT',
        s3: 'ITA',
        codigo: '380',
        himno:'http://www.nationalanthems.info/it.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Jamaica.gif',
        orden: '95',
        nombre: 'Jamaica',
        oficialName: 'Jamaica',
        s2: 'JM',
        s3: 'JAM',
        codigo: '388',
        himno:'http://www.nationalanthems.info/jm.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Japan.gif',
        orden: '96',
        nombre: 'Japón',
        oficialName: 'Japón',
        s2: 'JP',
        s3: 'JPN',
        codigo: '392',
        himno:'http://www.nationalanthems.info/jp.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Jordan.gif',
        orden: '97',
        nombre: 'Jordania',
        oficialName: 'El Reino Hachemita de Jordania',
        s2: 'JO',
        s3: 'JOR',
        codigo: '400',
        himno:'http://www.nationalanthems.info/jo.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Kenya.gif',
        orden: '98',
        nombre: 'Kenya',
        oficialName: 'La República de Kenya',
        s2: 'KE',
        s3: 'KEN',
        codigo: '404',
        himno:'http://www.nationalanthems.info/ke.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Kiribati.gif',
        orden: '99',
        nombre: 'Kiribati',
        oficialName: 'La República de Kiribati',
        s2: 'KI',
        s3: 'KIR',
        codigo: '296',
        himno:'http://www.nationalanthems.info/ki.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Kuwait.gif',
        orden: '100',
        nombre: 'Kuwait',
        oficialName: 'El Estado de Kuwait',
        s2: 'KW',
        s3: 'KWT',
        codigo: '414',
        himno:'http://www.nationalanthems.info/kw.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Kazakhstan.gif',
        orden: '101',
        nombre: 'Kazajstán',
        oficialName: 'La República de Kazajstán',
        s2: 'KZ',
        s3: 'KAZ',
        codigo: '398',
        himno:'http://www.nationalanthems.info/kz.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Kyrgyzstan.gif',
        orden: '102',
        nombre: 'Kirguistán',
        oficialName: 'La República Kirguisa',
        s2: 'KG',
        s3: 'KGZ',
        codigo: '417',
        himno:'http://www.nationalanthems.info/kg.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Latvia.gif',
        orden: '103',
        nombre: 'Letonia',
        oficialName: 'La República de Letonia',
        s2: 'LV',
        s3: 'LVA',
        codigo: '428',
        himno:'http://www.nationalanthems.info/lv.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Lesotho.gif',
        orden: '104',
        nombre: 'Lesotho',
        oficialName: 'El Reino de Lesotho',
        s2: 'LS',
        s3: 'LSO',
        codigo: '426',
        himno:'http://www.nationalanthems.info/ls.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Lebanon.gif',
        orden: '105',
        nombre: 'Líbano',
        oficialName: 'La República Libanesa',
        s2: 'LB',
        s3: 'LBN',
        codigo: '422',
        himno:'http://www.nationalanthems.info/lb.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Liberia.gif',
        orden: '106',
        nombre: 'Liberia',
        oficialName: 'La República de Liberia',
        s2: 'LR',
        s3: 'LBR',
        codigo: '430', 
        himno:'http://www.nationalanthems.info/lr.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Libya.gif',
        orden: '107',
        nombre: 'Libia',
        oficialName: 'El Estado de Libia',
        s2: 'LY',
        s3: 'LBY',
        codigo: '434',
        himno:'http://www.nationalanthems.info/ly.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Lithuania.gif',
        orden: '108',
        nombre: 'Lituania',
        oficialName: 'La República de Lituania',
        s2: 'LT',
        s3: 'LTU',
        codigo: '440',
        himno:'http://www.nationalanthems.info/lt.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Luxembourg.gif',
        orden: '109',
        nombre: 'Luxemburgo',
        oficialName: 'El Gran Ducado de Luxemburgo',
        s2: 'LU',
        s3: 'LUX',
        codigo: '442',
        himno:'http://www.nationalanthems.info/lu.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Macedonia.gif',
        orden: '110',
        nombre: 'Macedonia del Norte',
        oficialName: 'La República de Macedonia del Norte',
        s2: 'MK',
        s3: 'MKD',
        codigo: '807',
        himno:'http://www.nationalanthems.info/mk.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Madagascar.gif',
        orden: '111',
        nombre: 'Madagascar',
        oficialName: 'La República de Madagascar',
        s2: 'MG',
        s3: 'MDG',
        codigo: '450',
        himno:'http://www.nationalanthems.info/mg.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Malaysia.gif',
        orden: '112',
        nombre: 'Malasia',
        oficialName: 'Malasia',
        s2: 'MY',
        s3: 'MYS',
        codigo: '458',
        himno:'http://www.nationalanthems.info/my%20short.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Malawi.gif',
        orden: '113',
        nombre: 'Malawi',
        oficialName: 'La República de Malaw',
        s2: 'MW',
        s3: 'MWI',
        codigo: '454',
        himno:'http://www.nationalanthems.info/mw.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Maldives.gif',
        orden: '114',
        nombre: 'Maldivas',
        oficialName: 'La República de Maldivas',
        s2: 'MV',
        s3: 'MDV',
        codigo: '462',
        himno:'http://www.nationalanthems.info/mv.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Mali.gif',
        orden: '115',
        nombre: 'Malí',
        oficialName: 'La República de Malí',
        s2: 'ML',
        s3: 'MLI',
        codigo: '466',
        himno:'http://www.nationalanthems.info/ml.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Malta.gif',
        orden: '116',
        nombre: 'Malta',
        oficialName: 'La República de Malta',
        s2: 'MT',
        s3: 'MLT',
        codigo: '470',
        himno:'http://www.nationalanthems.info/mt.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Morocco.gif',
        orden: '117',
        nombre: 'Marruecos',
        oficialName: 'El Reino de Marruecos',
        s2: 'MA',
        s3: 'MAR',
        codigo: '504',
        himno:'http://www.nationalanthems.info/ma.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Mauritius.gif',
        orden: '118',
        nombre: 'Mauricio',
        oficialName: 'La República de Mauricio',
        s2: 'MU',
        s3: 'MUS',
        codigo: '480',
        himno:'http://www.nationalanthems.info/mu.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Mauritania.gif',
        orden: '119',
        nombre: 'Mauritania',
        oficialName: 'La República Islámica de Mauritania',
        s2: 'MR',
        s3: 'MRT',
        codigo: '478',
        himno:'http://www.nationalanthems.info/mr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Mexico.gif',
        orden: '120',
        nombre: 'México',
        oficialName: 'Los Estados Unidos Mexicanos',
        s2: 'MX',
        s3: 'MEX',
        codigo: '484',
        himno:'http://www.nationalanthems.info/mr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Micronesia.gif',
        orden: '121',
        nombre: 'Micronesia',
        oficialName: 'Los Estados Federados de Micronesia',
        s2: 'FM',
        s3: 'FSM',
        codigo: '583',
        himno:'http://www.nationalanthems.info/mr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Mozambique.gif',
        orden: '122',
        nombre: 'Mozambique',
        oficialName: 'La República de Mozambique',
        s2: 'MZ',
        s3: 'MOZ',
        codigo: '508',
        himno:'http://www.nationalanthems.info/mr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Monaco.gif',
        orden: '123',
        nombre: 'Mónaco',
        oficialName: 'El Principado de Mónaco',
        s2: 'MC',
        s3: 'MCO',
        codigo: '492',
        himno:'http://www.nationalanthems.info/mr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Mongolia.gif',
        orden: '124',
        nombre: 'Mongolia',
        oficialName: 'Mongolia',
        s2: 'MN',
        s3: 'MNG',
        codigo: '496',
        himno:'http://www.nationalanthems.info/mn.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Montenegro.gif',
        orden: '125',
        nombre: 'Montenegro',
        oficialName: 'Montenegro',
        s2: 'ME',
        s3: 'MNE',
        codigo: '499',
        himno:'http://www.nationalanthems.info/me.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Myanmar.gif',
        orden: '126',
        nombre: 'Myanmar',
        oficialName: 'La República de la Unión de Myanmar',
        s2: 'MM',
        s3: 'MMR',
        codigo: '104',
        himno:'http://www.nationalanthems.info/mm.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Namibia.gif',
        orden: '127',
        nombre: 'Namibia',
        oficialName: 'La República de Namibia',
        s2: 'NA',
        s3: 'NAM',
        codigo: '516',
        himno:'http://www.nationalanthems.info/na.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Nauru.gif',
        orden: '128',
        nombre: 'Nauru',
        oficialName: 'La República de Nauru',
        s2: 'NR',
        s3: 'NRU',
        codigo: '520',
        himno:'http://www.nationalanthems.info/nr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Nepal.gif',
        orden: '129',
        nombre: 'Nepal',
        oficialName: 'La República Democrática Federal de Nepal',
        s2: 'NP',
        s3: 'NPL',
        codigo: '524',
        himno:'http://www.nationalanthems.info/nr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Nicaragua.gif',
        orden: '130',
        nombre: 'Nicaragua',
        oficialName: 'La República de Nicaragua',
        s2: 'NI',
        s3: 'NIC',
        codigo: '558',
        himno:'http://www.nationalanthems.info/ni.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Niger.gif',
        orden: '131',
        nombre: 'Níger',
        oficialName: 'La República de Níger',
        s2: 'NE',
        s3: 'NER',
        codigo: '562',
        himno:'http://www.nationalanthems.info/ne.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Nigeria.gif',
        orden: '132',
        nombre: 'Nigeria',
        oficialName: 'La República Federal de Nigeria',
        s2: 'NG',
        s3: 'NGA',
        codigo: '566',
        himno:'http://www.nationalanthems.info/ng.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Niue.gif',
        orden: '133',
        nombre: 'Niue',
        oficialName: 'Niue',
        s2: 'NU',
        s3: 'NIU',
        codigo: '570',
        himno:'http://www.nationalanthems.info/nu.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Norway.gif',
        orden: '134',
        nombre: 'Noruega',
        oficialName: 'El Reino de Noruega',
        s2: 'NO',
        s3: 'NOR',
        codigo: '578',
        himno:'http://www.nationalanthems.info/nu.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/New%20Zealand.gif',
        orden: '135',
        nombre: 'Nueva Zelandia',
        oficialName: 'Nueva Zelandia',
        s2: 'NZ',
        s3: 'NZL',
        codigo: '554',
        himno:'http://www.nationalanthems.info/nz.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Oman.gif',
        orden: '136',
        nombre: 'Omán',
        oficialName: 'La Sultanía de Omán',
        s2: 'OM',
        s3: 'OMN',
        codigo: '512',
        himno:'http://www.nationalanthems.info/om.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Palau.gif',
        orden: '137',
        nombre: 'Palau',
        oficialName: 'La República de Palau',
        s2: 'PW',
        s3: 'PLW',
        codigo: '585',
        himno:'http://www.nationalanthems.info/pw.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Panama.gif',
        orden: '138',
        nombre: 'Panamá',
        oficialName: 'La República de Panamá',
        s2: 'PA',
        s3: 'PAN',
        codigo: '591',
        himno:'http://www.nationalanthems.info/pa.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Papau%20New%20Guinea.gif',
        orden: '139',
        nombre: 'Papua Nueva Guinea',
        oficialName: 'Estado Independiente de Papua Nueva Guinea',
        s2: 'PG',
        s3: 'PNG',
        codigo: '598',
        himno:'http://www.nationalanthems.info/pg.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Pakistan.gif',
        orden: '140',
        nombre: 'Pakistán',
        oficialName: 'La República Islámica del Pakistán',
        s2: 'PK',
        s3: 'PAK',
        codigo: '586',
        himno:'http://www.nationalanthems.info/pk.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Paraguay.gif',
        orden: '141',
        nombre: 'Paraguay',
        oficialName: 'La República del Paraguay',
        s2: 'PY',
        s3: 'PRY',
        codigo: '600',
        himno:'http://www.nationalanthems.info/py.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Peru.gif',
        orden: '142',
        nombre: 'Perú',
        oficialName: 'La República del Perú',
        s2: 'PE',
        s3: 'PER',
        codigo: '604',
        himno:'http://www.nationalanthems.info/pe.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Poland.gif',
        orden: '143',
        nombre: 'Polonia',
        oficialName: 'La República de Polonia',
        s2: 'PL',
        s3: 'POL',
        codigo: '616',
        himno:'http://www.nationalanthems.info/pl.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Puerto%20Rico.gif',
        orden: '144',
        nombre: 'Puerto Rico',
        oficialName: 'Estado Libre Asociado de Puerto Rico',
        s2: 'PR',
        s3: 'PRI',
        codigo: '630',
        himno:'http://www.nationalanthems.info/pr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Portugal.gif',
        orden: '145',
        nombre: 'Portugal',
        oficialName: 'La República Portuguesa',
        s2: 'PT',
        s3: 'PRT',
        codigo: '620',
        himno:'http://www.nationalanthems.info/pt.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Qatar.gif', 
        orden: '146',
        nombre: 'Qatar',
        oficialName: 'El Estado de Qatar',
        s2: 'QA',
        s3: 'QAT',
        codigo: '634',
        himno:'http://www.nationalanthems.info/qa.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Central%20African%20Republic.gif',
        orden: '147',
        nombre: 'República Centroafricana',
        oficialName: 'La República Centroafricana',
        s2: 'CF',
        s3: 'CAF',
        codigo: '140',
        himno:'http://www.nationalanthems.info/cf.mp3'

      },
      {
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1200px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
        orden: '148',
        nombre: 'República Democrática del Congo',
        oficialName: 'La República Democrática del Congo',
        s2: 'CD',
        s3: 'COD',
        codigo: '180',
        himno:'http://www.nationalanthems.info/cd.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Dominican%20Republic.gif',
        orden: '149',
        nombre: 'República Dominicana',
        oficialName: 'La República Dominicana',
        s2: 'DO',
        s3: 'DOM',
        codigo: '214',
        himno:'http://www.nationalanthems.info/do.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Romania.gif',
        orden: '150',
        nombre: 'Rumania',
        oficialName: 'Rumania',
        s2: 'RO',
        s3: 'ROU',
        codigo: '642',
        himno:'http://www.nationalanthems.info/ro.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Rwanda.gif',
        orden: '151',
        nombre: 'Rwanda',
        oficialName: 'La República de Rwanda',
        s2: 'RW',
        s3: 'RWA',
        codigo: '646',
        himno:'http://www.nationalanthems.info/rw.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Russia.gif',
        orden: '152',
        nombre: 'Rusia',
        oficialName: 'Federación Rusa',
        s2: 'RU',
        s3: 'RUS',
        codigo: '643',
        himno:'http://www.nationalanthems.info/ru.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Saint%20Vincent%20and%20the%20Grenadines.gif',
        orden: '153',
        nombre: 'San Vicente y las Granadinas',
        oficialName: 'San Vicente y las Granadinas',
        s2: 'VC',
        s3: 'VCT',
        codigo: '670',
        himno:'http://www.nationalanthems.info/vc.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Samoa.gif',
        orden: '154',
        nombre: 'Samoa',
        oficialName: 'El Estado Independiente de Samoa',
        s2: 'WS',
        s3: 'WSM',
        codigo: '882',
        himno:'http://www.nationalanthems.info/ws.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/San%20Marino.gif',
        orden: '155',
        nombre: 'San Marino',
        oficialName: 'La República de San Marino',
        s2: 'SM',
        s3: 'SMR',
        codigo: '674',
        himno:'http://www.nationalanthems.info/sm.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Saint%20Lucia.gif',
        orden: '156',
        nombre: 'Santa Lucía',
        oficialName: 'Santa Lucía',
        s2: 'LC',
        s3: 'LCA',
        codigo: '662',
        himno:'http://www.nationalanthems.info/lc.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/St%20Kitts%20and%20Nevis.gif',
        orden: '157',
        nombre: 'Saint Kitts y Nevis',
        oficialName: 'Saint Kitts y Nevis',
        s2: 'KN',
        s3: 'KNA',
        codigo: '659',
        himno:'http://www.nationalanthems.info/sc.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Seychelles.gif',
        orden: '158',
        nombre: 'Seychelles',
        oficialName: 'La República de Seychelles',
        s2: 'SC',
        s3: 'SYC',
        codigo: '690',
        himno:'http://www.nationalanthems.info/sc.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Singapore.gif',
        orden: '159',
        nombre: 'Singapur',
        oficialName: 'La República deSingapur',
        s2: 'SG',
        s3: 'SGP',
        codigo: '702',
        himno:'http://www.nationalanthems.info/sg.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Sao%20Tome%20and%20Principe.gif',
        orden: '160',
        nombre: 'Santo Tomé y Príncipe',
        oficialName: 'La República Democrática de Santo Tomé y Príncipe',
        s2: 'ST',
        s3: 'STP',
        codigo: '678',
        himno:'http://www.nationalanthems.info/st.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Senegal.gif',
        orden: '161',
        nombre: 'Senegal',
        oficialName: 'La República del Senegal',
        s2: 'SN',
        s3: 'SEN',
        codigo: '686',
        himno:'http://www.nationalanthems.info/sn.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Sierra%20Leone.gif',
        orden: '162',
        nombre: 'Sierra Leona',
        oficialName: 'La República de Sierra Leona',
        s2: 'SL',
        s3: 'SLE',
        codigo: '694',
        himno:'http://www.nationalanthems.info/rs.mp3'

      },
      {
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
        orden: '163',
        nombre: 'Serbia',
        oficialName: 'La República de Serbia',
        s2: 'RS',
        s3: 'SRB',
        codigo: '688',
        himno:'http://www.nationalanthems.info/rs.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Syria.gif',
        orden: '164',
        nombre: 'Síria',
        oficialName: 'República Árabe Siria',
        s2: 'SY',
        s3: 'SYR',
        codigo: '760',
        himno:'http://www.nationalanthems.info/sy.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Somalia.gif',
        orden: '165',
        nombre: 'Somalia',
        oficialName: 'La República Federal de Somalia',
        s2: 'SO',
        s3: 'SOM',
        codigo: '706',
        himno:'http://www.nationalanthems.info/so.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Sri%20Lanka.gif',
        orden: '166',
        nombre: 'Sri Lanka',
        oficialName: 'La República Socialista Democrática de Sri Lanka',
        s2: 'LK',
        s3: 'LKA',
        codigo: '144',
        himno:'http://www.nationalanthems.info/lk.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Sudan.gif',
        orden: '167',
        nombre: 'Sudán',
        oficialName: 'La República del Sudán',
        s2: 'SD',
        s3: 'SDN',
        codigo: '736',
        himno:'http://www.nationalanthems.info/sd.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Sweden.gif',
        orden: '168',
        nombre: 'Suecia',
        oficialName: 'El Reino de Suecia',
        s2: 'SE',
        s3: 'SWE',
        codigo: '752',
        himno:'http://www.nationalanthems.info/ch.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Switzerland.gif',
        orden: '169',
        nombre: 'Suiza',
        oficialName: 'La Confederación Suiza',
        s2: 'CH',
        s3: 'CHE',
        codigo: '756',
        himno:'http://www.nationalanthems.info/ch.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Suriname.gif',
        orden: '170',
        nombre: 'Suriname',
        oficialName: 'La República de Suriname',
        s2: 'SR',
        s3: 'SUR',
        codigo: '740',
        himno:'http://www.nationalanthems.info/sr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/South%20Africa.gif',
        orden: '171',
        nombre: 'Sudáfrica',
        oficialName: 'La República de Sudáfrica',
        s2: 'ZA',
        s3: 'ZAF',
        codigo: '710',
        himno:'http://www.nationalanthems.info/th.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/south%20sudan.png',
        orden: '172',
        nombre: 'Sudán del Sur',
        oficialName: 'La República de Sudán del Sur',
        s2: 'SS',
        s3: 'SSD',
        codigo: '728',
        himno:'http://www.nationalanthems.info/th.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Tajikistan.gif',
        orden: '173',
        nombre: 'Tayikistán',
        oficialName: 'La República de Tayikistán',
        s2: 'TJ',
        s3: 'TJK',
        codigo: '762',
        himno:'http://www.nationalanthems.info/th.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Thailand.gif',
        orden: '174',
        nombre: 'Tailandia',
        oficialName: 'El Reino de Tailandia',
        s2: 'TH',
        s3: 'THA',
        codigo: '764',
        himno:'http://www.nationalanthems.info/th.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Taiwan.gif',
        orden: '175',
        nombre: 'Taiwán',
        oficialName: 'La República de China',
        s2: 'TW',
        s3: 'TWN',
        codigo: '158',
        himno:'http://www.nationalanthems.info/tw.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/East%20Timor.gif',
        orden: '176',
        nombre: 'Timor-Leste',
        oficialName: 'La República Democrática de Timor-Leste',
        s2: 'TL',
        s3: 'TLS',
        codigo: '626',
        himno:'http://www.nationalanthems.info/tg.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Togo.gif',
        orden: '177',
        nombre: 'Togo',
        oficialName: 'La República Togolesa',
        s2: 'TG',
        s3: 'TGO',
        codigo: '768',
        himno:'http://www.nationalanthems.info/tg.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Tokelau.gif',
        orden: '178',
        nombre: 'Tokelau',
        oficialName: 'Tokelau',
        s2: 'TK',
        s3: 'TKL',
        codigo: '772',
        himno:''

      },
      {
        imageURL: 'http://anthemworld.com/flags/Tonga.gif',
        orden: '179',
        nombre: 'Tonga',
        oficialName: 'El Reino de Tonga',
        s2: 'TO',
        s3: 'TON',
        codigo: '776',
        himno:'http://www.nationalanthems.info/to.mp3'
      },
      {
        imageURL: 'http://anthemworld.com/flags/Trinidad%20and%20Tobago.gif',
        orden: '180',
        nombre: 'Trinidad y Tabago',
        oficialName: 'La República de Trinidad y Tabago',
        s2: 'TT',
        s3: 'TTO',
        codigo: '780',
        himno:'http://www.nationalanthems.info/tn.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Tunisia.gif',
        orden: '181',
        nombre: 'Túnez',
        oficialName: 'La República de Túnez',
        s2: 'TN',
        s3: 'TUN',
        codigo: '788',
        himno:'http://www.nationalanthems.info/tn.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Turkmenistan.gif',
        orden: '182',
        nombre: 'Turkmenistán',
        oficialName: 'Turkmenistán',
        s2: 'TM',
        s3: 'TKM',
        codigo: '795',
        himno:'http://www.nationalanthems.info/tm.mp3'

      },
      {
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
        orden: '183',
        nombre: 'Turquía',
        oficialName: 'La República de Turquía',
        s2: 'TR',
        s3: 'TUR',
        codigo: '792',
        himno:'http://www.nationalanthems.info/tr.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Tuvalu.gif',
        orden: '184',
        nombre: 'Tuvalu',
        oficialName: 'Tuvalu',
        s2: 'TV',
        s3: 'TUV',
        codigo: '798',
        himno:'http://www.nationalanthems.info/tv.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Ukraine.gif',
        orden: '185',
        nombre: 'Ucrania',
        oficialName: 'Ucrania',
        s2: 'UA',
        s3: 'UKR',
        codigo: '804',
        himno:'http://www.nationalanthems.info/ua.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Uganda.gif',
        orden: '186',
        nombre: 'Uganda',
        oficialName: 'La República de Uganda',
        s2: 'UG',
        s3: 'UGA',
        codigo: '800',
        himno:'http://www.nationalanthems.info/ug.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Uruguay.gif',
        orden: '187',
        nombre: 'Uruguay',
        oficialName: 'La República Oriental del Uruguay',
        s2: 'UY',
        s3: 'URY',
        codigo: '858',
        himno:'http://www.nationalanthems.info/uy.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Uzbekistan.gif',
        orden: '188',
        nombre: 'Uzbekistán',
        oficialName: 'La República de Uzbekistán',
        s2: 'UZ',
        s3: 'UZB',
        codigo: '860',
        himno:'http://www.nationalanthems.info/uz.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Vanuatu.gif',
        orden: '189',
        nombre: 'Vanuatu',
        oficialName: 'La República de Vanuatu',
        s2: 'VU',
        s3: 'VUT',
        codigo: '548',
        himno:'http://www.nationalanthems.info/va.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Vatican%20City.gif',
        orden: '190',
        nombre: 'Vaticano',
        oficialName: 'Estado de la Ciudad del Vaticano',
        s2: 'VA',
        s3: 'VAT',
        codigo: '336',
        himno:'http://www.nationalanthems.info/va.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Venezuela.gif',
        orden: '191',
        nombre: 'Venezuela',
        oficialName: 'La República de Venezuela',
        s2: 'VE',
        s3: 'VEN',
        codigo: '862',
        himno:'http://www.nationalanthems.info/ve.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Vietnam.gif',
        orden: '192',
        nome: 'Vietnã',
        nombre: 'Viet Nam',
        oficialName: 'La República Socialista de Viet Nam',
        s2: 'VN',
        s3: 'VNM',
        codigo: '704',
        himno:'http://www.nationalanthems.info/vn.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Yemen.gif',
        orden: '193',
        nombre: 'Yemen',
        oficialName: 'La República del Yemen',
        s2: 'YE',
        s3: 'YEM',
        codigo: '887',
        himno:'http://www.nationalanthems.info/ye.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Zambia.gif',
        orden: '194',
        nombre: 'Zambia',
        oficialName: 'La República de Zambia',
        s2: 'ZM',
        s3: 'ZMB',
        codigo: '894',
        himno:'http://www.nationalanthems.info/zm.mp3'

      },
      {
        imageURL: 'http://anthemworld.com/flags/Zimbabwe.gif',
        orden: '195',
        nombre: 'Zimbabwe',
        oficialName: 'La República de Zimbabwe',
        s2: 'ZW',
        s3: 'ZWE',
        codigo: '716',
        himno:'http://www.nationalanthems.info/zw.mp3'
      }
    ]

   

     constructor (){}

  

  ngOnInit() {
  }

  

  
}
