/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '.';
import { DNSRecord } from './dNSRecord';
import { DomainCertificateMetadata } from './domainCertificateMetadata';
import { DomainCertificateSourceType } from './domainCertificateSourceType';
import { DomainValidationStatus } from './domainValidationStatus';

export class Domain {
    'certificateSourceType'?: DomainCertificateSourceType;
    'dnsRecords'?: Array<DNSRecord>;
    'domain'?: string;
    'id'?: string;
    'publicCertificate'?: DomainCertificateMetadata;
    'validationStatus'?: DomainValidationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certificateSourceType",
            "baseName": "certificateSourceType",
            "type": "DomainCertificateSourceType"
        },
        {
            "name": "dnsRecords",
            "baseName": "dnsRecords",
            "type": "Array<DNSRecord>"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "publicCertificate",
            "baseName": "publicCertificate",
            "type": "DomainCertificateMetadata"
        },
        {
            "name": "validationStatus",
            "baseName": "validationStatus",
            "type": "DomainValidationStatus"
        }    ];

    static getAttributeTypeMap() {
        return Domain.attributeTypeMap;
    }
}

