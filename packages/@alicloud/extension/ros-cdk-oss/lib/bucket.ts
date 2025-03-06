import { Bucket } from '@alicloud/ros-cdk-oss';
import * as ros from "@alicloud/ros-cdk-core";
import * as ram from "@alicloud/ros-cdk-ram";
import {EOL} from "os";
import * as perms from "./perms.cdk"
import {IResolvable} from "@alicloud/ros-cdk-core";

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

        if (errors.length > 0) {
            throw new Error(`Invalid OSS bucket name (value: ${bucketName})${EOL}${errors.join(EOL)}`);
        }
    }

    /**
     * Returns an ARN that represents all objects within the bucket that match
     * the key pattern specified. To represent all keys, specify ``"*"``.
     *
     * If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:
     *
     *   arnForObjects(`home/${team}/${user}/*`)
     *
     */
    public arnForObjects(keyPattern: string): string {
        return `${this.attrArn}/${keyPattern}`;
    }

    private grant(
        principle: ram.IPrincipal,
        bucketActions: string[],
        resourceArn: string | IResolvable, ...otherResourceArns: (string | IResolvable)[]): ram.ManagedPolicy {
        const policyDocument: ram.RosManagedPolicy.PolicyDocumentProperty = {
            statement: [
                {
                    action: bucketActions,
                    effect: 'Allow',
                    resource: [resourceArn, ...otherResourceArns],
                },
            ],
            version: '1',
        };
        return principle.addToPolicy(policyDocument);
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list and read all resources for this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public grantRead(identity: ram.IPrincipal, objectsKeyPattern: string = '*') {
        return this.grant(identity, perms.BUCKET_READ_ACTIONS.concat(perms.BUCKET_LIST_ACTIONS),
            this.attrArn,
            this.arnForObjects(objectsKeyPattern));
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to read and write resources for this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public grantReadWrite(identity: ram.IPrincipal, objectsKeyPattern: string = '*') {
        return this.grant(identity, perms.BUCKET_READ_WRITE_ACTIONS,
            this.attrArn,
            this.arnForObjects(objectsKeyPattern));
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list resources for this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public grantList(identity: ram.IPrincipal, objectsKeyPattern: string = '*') {
        return this.grant(identity, perms.BUCKET_LIST_ACTIONS,
            this.attrArn,
            this.arnForObjects(objectsKeyPattern));
    }

    /**
     * Grant an RAM principal (Role/Group/User) full control over this bucket.
     *
     * @param identity The principal
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public grantFullAccess(identity: ram.IPrincipal, objectsKeyPattern: string = '*') {
        return this.grant(identity, ['oss:*'],
            this.attrArn,
            this.arnForObjects(objectsKeyPattern));
    }
}