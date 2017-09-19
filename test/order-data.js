'use strict'

module.exports = {
    msh: {
      sending_application: 'ypii',
      sending_facility: 'blgs',
      receiving_application: 'ventana',
      receiving_facility: 'ventana',
      date_time_of_message: '2017-1-1 12:34',
      message_type: 'ORUO-01',
      message_control_id: '123123123'
    },
    pid: {
      medical_record_number: 'MRN123123',
      last_name: 'MOUSE',
      first_name: 'MICKEY',
      middle_initial: 'E',
      birthdate: '1966-8-10',
      sex: 'M'
    },
    pv1: {
      requesting_physician_npi: 'NPI2123123',
      requesting_physician_lastname: 'DUCK',
      requesting_physician_firstname: 'DONALD'
    },
    sac: {
      registration_date_time: '2017-6-20 14:32'
    },
    stain_orders: [
      {
        orc: {
          order_control: '1',
          placer_order_number: '17-123.S',
          site_name: 'YPIBLGS',
          site_description: 'YPILAB',
          facility_code: 'YPILAB',
          facility_name: 'YPILAB'
        },
        obr: {
          order_sequence_id: '1',
          placer_order_number: '123123123',
          protocol_number: '3',
          protocol_name: 'D K/L-Titration',
          order_type: '???',
          observation_date_time: '2017-6-20 15:43',
          specimen_name: 'biopsy',
          specimen_description: 'left ear',
          surgical_procedure_name: 'surgical pathology',
          pathologist_npi: 'NPI123123',
          pathologist_lastname: 'MOUSE',
          pathologist_firstname: 'mini',
          slide_id: '17-123.1A1',
          slide_sequence: '1A1',
          blockid: '1A',
          block_sequence: 'A',
          specimen_id: '17-123.1',
          specimen_sequence: '1'
        }
      },
      {
        orc: {
          order_control: '2',
          placer_order_number: '17-123.S',
          site_name: 'YPIBLGS',
          site_description: 'YPILAB',
          facility_code: 'YPILAB',
          facility_name: 'YPILAB'
        },
        obr: {
          order_sequence_id: '2',
          placer_order_number: '123123123',
          protocol_number: '3',
          protocol_name: 'D K/L-Titration',
          order_type: '???',
          observation_date_time: '2017-6-20 15:43',
          specimen_name: 'biopsy',
          specimen_description: 'left ear',
          surgical_procedure_name: 'surgical pathology',
          pathologist_npi: 'NPI123123',
          pathologist_lastname: 'MOUSE',
          pathologist_firstname: 'mini',
          slide_id: '17-123.1A1',
          slide_sequence: '1A1',
          blockid: '1A',
          block_sequence: 'A',
          specimen_id: '17-123.1',
          specimen_sequence: '1'
        }
      }
    ]
}
