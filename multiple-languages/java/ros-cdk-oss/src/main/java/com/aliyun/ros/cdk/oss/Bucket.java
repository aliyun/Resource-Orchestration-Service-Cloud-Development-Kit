package com.aliyun.ros.cdk.oss;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OSS::Bucket</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.873Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.Bucket")
public class Bucket extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.oss.IBucket {

    protected Bucket(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Bucket(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Thrown an exception if the given bucket name is not valid.
     * <p>
     * @param physicalName name of the bucket. This parameter is required.
     */
    public static void validateBucketName(final @org.jetbrains.annotations.NotNull java.lang.String physicalName) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.oss.Bucket.class, "validateBucketName", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(physicalName, "physicalName is required") });
    }

    /**
     * Returns an ARN that represents all objects within the bucket that match the key pattern specified.
     * <p>
     * To represent all keys, specify <code>"*"</code>.
     * <p>
     * If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:
     * <p>
     * arnForObjects(<code>home/${team}/${user}/*</code>)
     * <p>
     * @param keyPattern This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String arnForObjects(final @org.jetbrains.annotations.NotNull java.lang.String keyPattern) {
        return software.amazon.jsii.Kernel.call(this, "arnForObjects", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(keyPattern, "keyPattern is required") });
    }

    /**
     * Grant an RAM principal (Role/Group/User) full control over this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantFullAccess(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity, final @org.jetbrains.annotations.Nullable java.lang.String objectsKeyPattern) {
        return software.amazon.jsii.Kernel.call(this, "grantFullAccess", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required"), objectsKeyPattern });
    }

    /**
     * Grant an RAM principal (Role/Group/User) full control over this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantFullAccess(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity) {
        return software.amazon.jsii.Kernel.call(this, "grantFullAccess", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required") });
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list resources for this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity, final @org.jetbrains.annotations.Nullable java.lang.String objectsKeyPattern) {
        return software.amazon.jsii.Kernel.call(this, "grantList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required"), objectsKeyPattern });
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list resources for this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity) {
        return software.amazon.jsii.Kernel.call(this, "grantList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required") });
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list and read all resources for this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantRead(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity, final @org.jetbrains.annotations.Nullable java.lang.String objectsKeyPattern) {
        return software.amazon.jsii.Kernel.call(this, "grantRead", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required"), objectsKeyPattern });
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list and read all resources for this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantRead(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity) {
        return software.amazon.jsii.Kernel.call(this, "grantRead", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required") });
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to read and write resources for this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     * @param objectsKeyPattern Restrict the permission to a certain key pattern (default '*').
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantReadWrite(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity, final @org.jetbrains.annotations.Nullable java.lang.String objectsKeyPattern) {
        return software.amazon.jsii.Kernel.call(this, "grantReadWrite", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required"), objectsKeyPattern });
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to read and write resources for this bucket.
     * <p>
     * @param identity The principal. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy grantReadWrite(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal identity) {
        return software.amazon.jsii.Kernel.call(this, "grantReadWrite", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(identity, "identity is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainName: The public DNS name of the specified bucket.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternalDomainName: The internal DNS name of the specified bucket.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternalDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrInternalDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Name: The name of Bucket.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.BucketProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property blockPublicAccess: Whether to block public access.
         * <p>
         * @return {@code this}
         * @param blockPublicAccess Property blockPublicAccess: Whether to block public access. This parameter is required.
         */
        public Builder blockPublicAccess(final java.lang.Boolean blockPublicAccess) {
            this.props.blockPublicAccess(blockPublicAccess);
            return this;
        }
        /**
         * Property blockPublicAccess: Whether to block public access.
         * <p>
         * @return {@code this}
         * @param blockPublicAccess Property blockPublicAccess: Whether to block public access. This parameter is required.
         */
        public Builder blockPublicAccess(final com.aliyun.ros.cdk.core.IResolvable blockPublicAccess) {
            this.props.blockPublicAccess(blockPublicAccess);
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
         * Property enableOssHdfsService: Whether enable OSS-HDFS service.
         * <p>
         * <strong>Note</strong>: Once it's enabled, it can't be disabled again.
         * <p>
         * @return {@code this}
         * @param enableOssHdfsService Property enableOssHdfsService: Whether enable OSS-HDFS service. This parameter is required.
         */
        public Builder enableOssHdfsService(final java.lang.Boolean enableOssHdfsService) {
            this.props.enableOssHdfsService(enableOssHdfsService);
            return this;
        }
        /**
         * Property enableOssHdfsService: Whether enable OSS-HDFS service.
         * <p>
         * <strong>Note</strong>: Once it's enabled, it can't be disabled again.
         * <p>
         * @return {@code this}
         * @param enableOssHdfsService Property enableOssHdfsService: Whether enable OSS-HDFS service. This parameter is required.
         */
        public Builder enableOssHdfsService(final com.aliyun.ros.cdk.core.IResolvable enableOssHdfsService) {
            this.props.enableOssHdfsService(enableOssHdfsService);
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
         * Property redundancyType: Specifies the data disaster recovery type of the storage space.
         * <p>
         * The value range is as follows:
         * LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
         * ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
         * <p>
         * @return {@code this}
         * @param redundancyType Property redundancyType: Specifies the data disaster recovery type of the storage space. This parameter is required.
         */
        public Builder redundancyType(final java.lang.String redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }
        /**
         * Property redundancyType: Specifies the data disaster recovery type of the storage space.
         * <p>
         * The value range is as follows:
         * LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
         * ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
         * <p>
         * @return {@code this}
         * @param redundancyType Property redundancyType: Specifies the data disaster recovery type of the storage space. This parameter is required.
         */
        public Builder redundancyType(final com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.props.redundancyType(redundancyType);
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
         * Property resourceGroupId: The resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
         * Property versioningConfiguration: A state of versioning.
         * <p>
         * @return {@code this}
         * @param versioningConfiguration Property versioningConfiguration: A state of versioning. This parameter is required.
         */
        public Builder versioningConfiguration(final com.aliyun.ros.cdk.core.IResolvable versioningConfiguration) {
            this.props.versioningConfiguration(versioningConfiguration);
            return this;
        }
        /**
         * Property versioningConfiguration: A state of versioning.
         * <p>
         * @return {@code this}
         * @param versioningConfiguration Property versioningConfiguration: A state of versioning. This parameter is required.
         */
        public Builder versioningConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.VersioningConfigurationProperty versioningConfiguration) {
            this.props.versioningConfiguration(versioningConfiguration);
            return this;
        }

        /**
         * Property websiteConfigurationV2: Website configuration.
         * <p>
         * @return {@code this}
         * @param websiteConfigurationV2 Property websiteConfigurationV2: Website configuration. This parameter is required.
         */
        public Builder websiteConfigurationV2(final com.aliyun.ros.cdk.core.IResolvable websiteConfigurationV2) {
            this.props.websiteConfigurationV2(websiteConfigurationV2);
            return this;
        }
        /**
         * Property websiteConfigurationV2: Website configuration.
         * <p>
         * @return {@code this}
         * @param websiteConfigurationV2 Property websiteConfigurationV2: Website configuration. This parameter is required.
         */
        public Builder websiteConfigurationV2(final com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationV2Property websiteConfigurationV2) {
            this.props.websiteConfigurationV2(websiteConfigurationV2);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oss.Bucket}.
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
