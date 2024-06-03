import { Bucket } from '@alicloud/ros-cdk-oss';
import * as ros from "@alicloud/ros-cdk-core";
import {EOL} from "os";

// const ossClient = require('ali-oss')


/**
 * A reference to a bucket outside this stack
 */
export interface BucketAttributes {

    /**
     * The name of the bucket.
     */
    readonly bucketName?: string;

    /**
     * The domain name of the bucket.
     *
     * @default - Inferred from bucket name and region
     */
    readonly bucketDomainName?: string;

    /**
     * The website URL of the bucket (if static web hosting is enabled).
     *
     * @default - Inferred from bucket name and region
     */
    readonly bucketWebsiteUrl?: string;

    /**
     * The endpoint of the bucket.
     *
     * @default - Inferred from region
     */
    readonly bucketEndpoint?: string;

    /**
     * If this bucket has been configured for static website hosting.
     *
     * @default false
     */
    readonly isWebsite?: boolean;

    /**
     * The region this existing bucket is in.
     * Features that require the region (e.g. `bucketWebsiteUrl`) won't fully work
     * if the region cannot be correctly inferred.
     *
     * @default - it's assumed the bucket is in the same region as the scope it's being imported into
     */
    readonly region?: string;
}

class ExtensionBucket extends Bucket {
    /**
     * Check whether the bucket exists.
     *
     * @param physicalName name of the bucket.
     */
    // public static async checkBucketExists(physicalName: string): Promise<boolean> {
    //     const config = await CdkToolkit.getConfig();
    //     let client_params;
    //     if (!config.accessKeyId || !config.accessKeySecret) {
    //         error("Please use 'ros-cdk config (-g)' or set environment to set your account configuration firstly!");
    //         exit(1);
    //     } else if (!config.securityToken) {
    //         client_params = {
    //             region: config.regionId,
    //             accessKeyId: config.accessKeyId,
    //             accessKeySecret: config.accessKeySecret
    //         };
    //     } else {
    //         client_params = {
    //             region: config.regionId,
    //             accessKeyId: config.accessKeyId,
    //             accessKeySecret: config.accessKeySecret,
    //             securityToken: config.securityToken
    //         };
    //     }
    //     const client = new ossClient(client_params);
    //     try {
    //         await client.getBucketInfo(physicalName);
    //     } catch (error) {
    //         if (error.name === 'NoSuchBucketError' || error.name === 'AccessDenied') {
    //             return true;
    //         } else {
    //             throw error;
    //         }
    //     }
    //     return false;
    // }

    /**
     * Thrown an exception if the given bucket name is not valid.
     *
     * @param physicalName name of the bucket.
     */
    public static async validateBucketName(physicalName: string): Promise<void> {
        const bucketName = physicalName;
        if (!bucketName || ros.Token.isUnresolved(bucketName)) {
            // the name is a late-bound value, not a defined string,
            // so skip validation
            return;
        }

        const errors: string[] = [];

        // Rules codified from https://www.alibabacloud.com/help/oss/user-guide/bucket-naming-conventions
        if (bucketName.length < 3 || bucketName.length > 63) {
            errors.push('Bucket name must be at least 3 and no more than 63 characters');
        }
        const charsetMatch = bucketName.match(/[^a-z0-9-]/);
        if (charsetMatch) {
            errors.push('Bucket name must only contain lowercase characters and the symbols and dash (-) '
                + `(offset: ${charsetMatch.index})`);
        }
        if (!/[a-z0-9]/.test(bucketName.charAt(0))) {
            errors.push('Bucket name must start and end with a lowercase character or number '
                + '(offset: 0)');
        }
        if (!/[a-z0-9]/.test(bucketName.charAt(bucketName.length - 1))) {
            errors.push('Bucket name must start and end with a lowercase character or number '
                + `(offset: ${bucketName.length - 1})`);
        }

        // if (checkBucketExists) {
        //     const exists = await ExtensionBucket.checkBucketExists(physicalName);
        //     if (exists) {
        //         errors.push(`Bucket name ${bucketName} is already taken`);
        //     }
        // }

        if (errors.length > 0) {
            throw new Error(`Invalid OSS bucket name (value: ${bucketName})${EOL}${errors.join(EOL)}`);
        }
    }
}