package com.aliyun.ros.cdk.oss;

/**
 * A ROS resource type:  `ALIYUN::OSS::Bucket`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:29.772Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.Bucket")
public class Bucket extends com.aliyun.ros.cdk.core.Resource {

    protected Bucket(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Bucket(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Bucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Bucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DomainName: The public DNS name of the specified bucket.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternalDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrInternalDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: The name of Bucket.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oss.Bucket}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oss.Bucket> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.oss.BucketProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oss.BucketProps.Builder();
        }

        /**
         * Property bucketName: bucket name.
         * <p>
         * @return {@code this}
         * @param bucketName Property bucketName: bucket name. This parameter is required.
         */
        public Builder bucketName(final java.lang.String bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }
        /**
         * Property bucketName: bucket name.
         * <p>
         * @return {@code this}
         * @param bucketName Property bucketName: bucket name. This parameter is required.
         */
        public Builder bucketName(final com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }

        /**
         * Property accessControl: The access control list.
         * <p>
         * @return {@code this}
         * @param accessControl Property accessControl: The access control list. This parameter is required.
         */
        public Builder accessControl(final java.lang.String accessControl) {
            this.props.accessControl(accessControl);
            return this;
        }
        /**
         * Property accessControl: The access control list.
         * <p>
         * @return {@code this}
         * @param accessControl Property accessControl: The access control list. This parameter is required.
         */
        public Builder accessControl(final com.aliyun.ros.cdk.core.IResolvable accessControl) {
            this.props.accessControl(accessControl);
            return this;
        }

        /**
         * Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
         * <p>
         * @return {@code this}
         * @param corsConfiguration Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket. This parameter is required.
         */
        public Builder corsConfiguration(final com.aliyun.ros.cdk.core.IResolvable corsConfiguration) {
            this.props.corsConfiguration(corsConfiguration);
            return this;
        }
        /**
         * Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
         * <p>
         * @return {@code this}
         * @param corsConfiguration Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket. This parameter is required.
         */
        public Builder corsConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.CORSConfigurationProperty corsConfiguration) {
            this.props.corsConfiguration(corsConfiguration);
            return this;
        }

        /**
         * Property deletionForce: Whether force delete the relative objects in the bucket.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the relative objects in the bucket. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force delete the relative objects in the bucket.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the relative objects in the bucket. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
         * <p>
         * @return {@code this}
         * @param lifecycleConfiguration Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime. This parameter is required.
         */
        public Builder lifecycleConfiguration(final com.aliyun.ros.cdk.core.IResolvable lifecycleConfiguration) {
            this.props.lifecycleConfiguration(lifecycleConfiguration);
            return this;
        }
        /**
         * Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
         * <p>
         * @return {@code this}
         * @param lifecycleConfiguration Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime. This parameter is required.
         */
        public Builder lifecycleConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.LifecycleConfigurationProperty lifecycleConfiguration) {
            this.props.lifecycleConfiguration(lifecycleConfiguration);
            return this;
        }

        /**
         * Property loggingConfiguration: Settings that defines where logs are stored.
         * <p>
         * @return {@code this}
         * @param loggingConfiguration Property loggingConfiguration: Settings that defines where logs are stored. This parameter is required.
         */
        public Builder loggingConfiguration(final com.aliyun.ros.cdk.core.IResolvable loggingConfiguration) {
            this.props.loggingConfiguration(loggingConfiguration);
            return this;
        }
        /**
         * Property loggingConfiguration: Settings that defines where logs are stored.
         * <p>
         * @return {@code this}
         * @param loggingConfiguration Property loggingConfiguration: Settings that defines where logs are stored. This parameter is required.
         */
        public Builder loggingConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.LoggingConfigurationProperty loggingConfiguration) {
            this.props.loggingConfiguration(loggingConfiguration);
            return this;
        }

        /**
         * Property policy: Bucket policy.
         * <p>
         * @return {@code this}
         * @param policy Property policy: Bucket policy. This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * Property policy: Bucket policy.
         * <p>
         * @return {@code this}
         * @param policy Property policy: Bucket policy. This parameter is required.
         */
        public Builder policy(final java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * Property refererConfiguration: undefined.
         * <p>
         * @return {@code this}
         * @param refererConfiguration Property refererConfiguration: undefined. This parameter is required.
         */
        public Builder refererConfiguration(final com.aliyun.ros.cdk.core.IResolvable refererConfiguration) {
            this.props.refererConfiguration(refererConfiguration);
            return this;
        }
        /**
         * Property refererConfiguration: undefined.
         * <p>
         * @return {@code this}
         * @param refererConfiguration Property refererConfiguration: undefined. This parameter is required.
         */
        public Builder refererConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.RefererConfigurationProperty refererConfiguration) {
            this.props.refererConfiguration(refererConfiguration);
            return this;
        }

        /**
         * Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
         * <p>
         * @return {@code this}
         * @param serverSideEncryptionConfiguration Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule. This parameter is required.
         */
        public Builder serverSideEncryptionConfiguration(final com.aliyun.ros.cdk.core.IResolvable serverSideEncryptionConfiguration) {
            this.props.serverSideEncryptionConfiguration(serverSideEncryptionConfiguration);
            return this;
        }
        /**
         * Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
         * <p>
         * @return {@code this}
         * @param serverSideEncryptionConfiguration Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule. This parameter is required.
         */
        public Builder serverSideEncryptionConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.ServerSideEncryptionConfigurationProperty serverSideEncryptionConfiguration) {
            this.props.serverSideEncryptionConfiguration(serverSideEncryptionConfiguration);
            return this;
        }

        /**
         * Property storageClass: Specifies the storage class of the bucket.
         * <p>
         * Default is "Standard".
         * <p>
         * @return {@code this}
         * @param storageClass Property storageClass: Specifies the storage class of the bucket. This parameter is required.
         */
        public Builder storageClass(final java.lang.String storageClass) {
            this.props.storageClass(storageClass);
            return this;
        }
        /**
         * Property storageClass: Specifies the storage class of the bucket.
         * <p>
         * Default is "Standard".
         * <p>
         * @return {@code this}
         * @param storageClass Property storageClass: Specifies the storage class of the bucket. This parameter is required.
         */
        public Builder storageClass(final com.aliyun.ros.cdk.core.IResolvable storageClass) {
            this.props.storageClass(storageClass);
            return this;
        }

        /**
         * Property tags: Bucket tags in k-v pairs format.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Bucket tags in k-v pairs format. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property websiteConfiguration: The properties of website config.
         * <p>
         * @return {@code this}
         * @param websiteConfiguration Property websiteConfiguration: The properties of website config. This parameter is required.
         */
        public Builder websiteConfiguration(final com.aliyun.ros.cdk.core.IResolvable websiteConfiguration) {
            this.props.websiteConfiguration(websiteConfiguration);
            return this;
        }
        /**
         * Property websiteConfiguration: The properties of website config.
         * <p>
         * @return {@code this}
         * @param websiteConfiguration Property websiteConfiguration: The properties of website config. This parameter is required.
         */
        public Builder websiteConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationProperty websiteConfiguration) {
            this.props.websiteConfiguration(websiteConfiguration);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.oss.Bucket}.
         */
        @Override
        public com.aliyun.ros.cdk.oss.Bucket build() {
            return new com.aliyun.ros.cdk.oss.Bucket(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
