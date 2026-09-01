import * as ros from '@alicloud/ros-cdk-core';
import { RosPcaCertificate } from './cas.generated';
export { RosPcaCertificate as PcaCertificateProperty };
/**
 * Properties for defining a `PcaCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
 */
export interface PcaCertificateProps {
    /**
     * Property commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    readonly commonName: string | ros.IResolvable;
    /**
     * Property locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    readonly locality: string | ros.IResolvable;
    /**
     * Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    readonly organization: string | ros.IResolvable;
    /**
     * Property organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    readonly organizationUnit: string | ros.IResolvable;
    /**
     * Property state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. <\/props>
     * <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. <\/props>.
     */
    readonly state: string | ros.IResolvable;
    /**
     * Property years: The validity period of the root CA certificate, in years.
     * > It is recommended to set to 5~10 years.
     */
    readonly years: number | ros.IResolvable;
    /**
     * Property algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format. Value:
     * - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
     * - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
     * - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
     * - **ECC_256**: The signature algorithm is Sha256WithECDSA.
     * - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
     * - **ECC_512**: The signature algorithm is Sha256WithECDSA.
     * - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.
     *
     * The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA\_1024**, **RSA\_2048**, or **RSA\_4096**.
     */
    readonly algorithm?: string | ros.IResolvable;
    /**
     * Property caStatus: The current CA status. Value:
     * - Issue: Enabled.
     * - Forbidden: Disabled.
     * - Revoke: Revoked.
     */
    readonly caStatus?: string | ros.IResolvable;
    /**
     * Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     * For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
     */
    readonly countryCode?: string | ros.IResolvable;
}
/**
 * Represents a `PcaCertificate`.
 */
export interface IPcaCertificate extends ros.IResource {
    readonly props: PcaCertificateProps;
    /**
     * Attribute Algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format.
     */
    readonly attrAlgorithm: ros.IResolvable | string;
    /**
     * Attribute CertificateType: The type of CA.
     */
    readonly attrCertificateType: ros.IResolvable | string;
    /**
     * Attribute CommonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     */
    readonly attrCountryCode: ros.IResolvable | string;
    /**
     * Attribute Identifier: Certificate Identifier.
     */
    readonly attrIdentifier: ros.IResolvable | string;
    /**
     * Attribute IssuerType: The institution issuing the CA.
     */
    readonly attrIssuerType: ros.IResolvable | string;
    /**
     * Attribute Locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    readonly attrLocality: ros.IResolvable | string;
    /**
     * Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    readonly attrOrganization: ros.IResolvable | string;
    /**
     * Attribute OrganizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    readonly attrOrganizationUnit: ros.IResolvable | string;
    /**
     * Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute Years: The validity period of the root CA certificate, in years.
     */
    readonly attrYears: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CAS::PcaCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPcaCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
 */
export declare class PcaCertificate extends ros.Resource implements IPcaCertificate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PcaCertificateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format.
     */
    readonly attrAlgorithm: ros.IResolvable | string;
    /**
     * Attribute CertificateType: The type of CA.
     */
    readonly attrCertificateType: ros.IResolvable | string;
    /**
     * Attribute CommonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     */
    readonly attrCountryCode: ros.IResolvable | string;
    /**
     * Attribute Identifier: Certificate Identifier.
     */
    readonly attrIdentifier: ros.IResolvable | string;
    /**
     * Attribute IssuerType: The institution issuing the CA.
     */
    readonly attrIssuerType: ros.IResolvable | string;
    /**
     * Attribute Locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    readonly attrLocality: ros.IResolvable | string;
    /**
     * Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    readonly attrOrganization: ros.IResolvable | string;
    /**
     * Attribute OrganizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    readonly attrOrganizationUnit: ros.IResolvable | string;
    /**
     * Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute Years: The validity period of the root CA certificate, in years.
     */
    readonly attrYears: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PcaCertificateProps, enableResourcePropertyConstraint?: boolean);
}
