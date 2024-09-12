package com.aliyun.ros.cdk.kafka;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::KAFKA::Instance</code>, which is used to create an ApsaraMQ for Kafka instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:28.130Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.kafka.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSaslDomainEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrSaslDomainEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSslDomainEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrSslDomainEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSslEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrSslEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeployType() {
        return software.amazon.jsii.Kernel.get(this, "deployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployType(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "deployType", java.util.Objects.requireNonNull(value, "deployType is required"));
    }

    /**
     */
    public void setDeployType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployType", java.util.Objects.requireNonNull(value, "deployType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeployOption() {
        return software.amazon.jsii.Kernel.get(this, "deployOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployOption(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployOption", value);
    }

    /**
     */
    public void setDeployOption(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.kafka.RosInstance.DeployOptionProperty value) {
        software.amazon.jsii.Kernel.set(this, "deployOption", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "diskSize", value);
    }

    /**
     */
    public void setDiskSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskType() {
        return software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "diskType", value);
    }

    /**
     */
    public void setDiskType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEipMax() {
        return software.amazon.jsii.Kernel.get(this, "eipMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEipMax(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "eipMax", value);
    }

    /**
     */
    public void setEipMax(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eipMax", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIoMax() {
        return software.amazon.jsii.Kernel.get(this, "ioMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIoMax(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ioMax", value);
    }

    /**
     */
    public void setIoMax(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ioMax", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIoMaxSpec() {
        return software.amazon.jsii.Kernel.get(this, "ioMaxSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIoMaxSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ioMaxSpec", value);
    }

    /**
     */
    public void setIoMaxSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ioMaxSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOpenConnector() {
        return software.amazon.jsii.Kernel.get(this, "openConnector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOpenConnector(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "openConnector", value);
    }

    /**
     */
    public void setOpenConnector(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "openConnector", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPartitionNum() {
        return software.amazon.jsii.Kernel.get(this, "partitionNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPartitionNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "partitionNum", value);
    }

    /**
     */
    public void setPartitionNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "partitionNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServerlessConfig() {
        return software.amazon.jsii.Kernel.get(this, "serverlessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServerlessConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serverlessConfig", value);
    }

    /**
     */
    public void setServerlessConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.kafka.RosInstance.ServerlessConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "serverlessConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpecType() {
        return software.amazon.jsii.Kernel.get(this, "specType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpecType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "specType", value);
    }

    /**
     */
    public void setSpecType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "specType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTopicQuota() {
        return software.amazon.jsii.Kernel.get(this, "topicQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTopicQuota(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "topicQuota", value);
    }

    /**
     */
    public void setTopicQuota(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "topicQuota", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty")
    @software.amazon.jsii.Jsii.Proxy(DeployOptionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DeployOptionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDeployModule();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossZone() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsEipInner() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsForceSelectedZones() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsSetUserAndPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNotifier() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroup() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSelectedZones() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserPhoneNum() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DeployOptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DeployOptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DeployOptionProperty> {
            java.lang.Object deployModule;
            java.lang.Object vSwitchId;
            java.lang.Object config;
            java.lang.Object crossZone;
            java.lang.Object isEipInner;
            java.lang.Object isForceSelectedZones;
            java.lang.Object isSetUserAndPassword;
            java.lang.Object kmsKeyId;
            java.lang.Object name;
            java.lang.Object notifier;
            java.lang.Object password;
            java.lang.Object securityGroup;
            java.lang.Object selectedZones;
            java.lang.Object serviceVersion;
            java.lang.Object username;
            java.lang.Object userPhoneNum;
            java.lang.Object vpcId;
            java.lang.Object vSwitchIds;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link DeployOptionProperty#getDeployModule}
             * @param deployModule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deployModule(java.lang.String deployModule) {
                this.deployModule = deployModule;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getDeployModule}
             * @param deployModule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deployModule(com.aliyun.ros.cdk.core.IResolvable deployModule) {
                this.deployModule = deployModule;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getConfig}
             * @param config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
                this.config = config;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getConfig}
             * @param config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder config(java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
                this.config = config;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getCrossZone}
             * @param crossZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossZone(java.lang.Boolean crossZone) {
                this.crossZone = crossZone;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getCrossZone}
             * @param crossZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossZone(com.aliyun.ros.cdk.core.IResolvable crossZone) {
                this.crossZone = crossZone;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getIsEipInner}
             * @param isEipInner the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isEipInner(java.lang.Boolean isEipInner) {
                this.isEipInner = isEipInner;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getIsEipInner}
             * @param isEipInner the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isEipInner(com.aliyun.ros.cdk.core.IResolvable isEipInner) {
                this.isEipInner = isEipInner;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getIsForceSelectedZones}
             * @param isForceSelectedZones the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isForceSelectedZones(java.lang.Boolean isForceSelectedZones) {
                this.isForceSelectedZones = isForceSelectedZones;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getIsForceSelectedZones}
             * @param isForceSelectedZones the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isForceSelectedZones(com.aliyun.ros.cdk.core.IResolvable isForceSelectedZones) {
                this.isForceSelectedZones = isForceSelectedZones;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getIsSetUserAndPassword}
             * @param isSetUserAndPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isSetUserAndPassword(java.lang.Boolean isSetUserAndPassword) {
                this.isSetUserAndPassword = isSetUserAndPassword;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getIsSetUserAndPassword}
             * @param isSetUserAndPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isSetUserAndPassword(com.aliyun.ros.cdk.core.IResolvable isSetUserAndPassword) {
                this.isSetUserAndPassword = isSetUserAndPassword;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getKmsKeyId}
             * @param kmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsKeyId(java.lang.String kmsKeyId) {
                this.kmsKeyId = kmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getKmsKeyId}
             * @param kmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
                this.kmsKeyId = kmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getNotifier}
             * @param notifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notifier(java.lang.String notifier) {
                this.notifier = notifier;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getNotifier}
             * @param notifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notifier(com.aliyun.ros.cdk.core.IResolvable notifier) {
                this.notifier = notifier;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getSecurityGroup}
             * @param securityGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroup(java.lang.String securityGroup) {
                this.securityGroup = securityGroup;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getSecurityGroup}
             * @param securityGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroup(com.aliyun.ros.cdk.core.IResolvable securityGroup) {
                this.securityGroup = securityGroup;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getSelectedZones}
             * @param selectedZones the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selectedZones(com.aliyun.ros.cdk.core.IResolvable selectedZones) {
                this.selectedZones = selectedZones;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getSelectedZones}
             * @param selectedZones the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selectedZones(java.util.List<? extends java.lang.Object> selectedZones) {
                this.selectedZones = selectedZones;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getServiceVersion}
             * @param serviceVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceVersion(java.lang.String serviceVersion) {
                this.serviceVersion = serviceVersion;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getServiceVersion}
             * @param serviceVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceVersion(com.aliyun.ros.cdk.core.IResolvable serviceVersion) {
                this.serviceVersion = serviceVersion;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getUsername}
             * @param username the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder username(java.lang.String username) {
                this.username = username;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getUsername}
             * @param username the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
                this.username = username;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getUserPhoneNum}
             * @param userPhoneNum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userPhoneNum(java.lang.String userPhoneNum) {
                this.userPhoneNum = userPhoneNum;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getUserPhoneNum}
             * @param userPhoneNum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userPhoneNum(com.aliyun.ros.cdk.core.IResolvable userPhoneNum) {
                this.userPhoneNum = userPhoneNum;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link DeployOptionProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DeployOptionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DeployOptionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DeployOptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeployOptionProperty {
            private final java.lang.Object deployModule;
            private final java.lang.Object vSwitchId;
            private final java.lang.Object config;
            private final java.lang.Object crossZone;
            private final java.lang.Object isEipInner;
            private final java.lang.Object isForceSelectedZones;
            private final java.lang.Object isSetUserAndPassword;
            private final java.lang.Object kmsKeyId;
            private final java.lang.Object name;
            private final java.lang.Object notifier;
            private final java.lang.Object password;
            private final java.lang.Object securityGroup;
            private final java.lang.Object selectedZones;
            private final java.lang.Object serviceVersion;
            private final java.lang.Object username;
            private final java.lang.Object userPhoneNum;
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchIds;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.deployModule = software.amazon.jsii.Kernel.get(this, "deployModule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossZone = software.amazon.jsii.Kernel.get(this, "crossZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isEipInner = software.amazon.jsii.Kernel.get(this, "isEipInner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isForceSelectedZones = software.amazon.jsii.Kernel.get(this, "isForceSelectedZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isSetUserAndPassword = software.amazon.jsii.Kernel.get(this, "isSetUserAndPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notifier = software.amazon.jsii.Kernel.get(this, "notifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroup = software.amazon.jsii.Kernel.get(this, "securityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.selectedZones = software.amazon.jsii.Kernel.get(this, "selectedZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceVersion = software.amazon.jsii.Kernel.get(this, "serviceVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userPhoneNum = software.amazon.jsii.Kernel.get(this, "userPhoneNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.deployModule = java.util.Objects.requireNonNull(builder.deployModule, "deployModule is required");
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
                this.config = builder.config;
                this.crossZone = builder.crossZone;
                this.isEipInner = builder.isEipInner;
                this.isForceSelectedZones = builder.isForceSelectedZones;
                this.isSetUserAndPassword = builder.isSetUserAndPassword;
                this.kmsKeyId = builder.kmsKeyId;
                this.name = builder.name;
                this.notifier = builder.notifier;
                this.password = builder.password;
                this.securityGroup = builder.securityGroup;
                this.selectedZones = builder.selectedZones;
                this.serviceVersion = builder.serviceVersion;
                this.username = builder.username;
                this.userPhoneNum = builder.userPhoneNum;
                this.vpcId = builder.vpcId;
                this.vSwitchIds = builder.vSwitchIds;
                this.zoneId = builder.zoneId;
            }

            @Override
            public final java.lang.Object getDeployModule() {
                return this.deployModule;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            public final java.lang.Object getConfig() {
                return this.config;
            }

            @Override
            public final java.lang.Object getCrossZone() {
                return this.crossZone;
            }

            @Override
            public final java.lang.Object getIsEipInner() {
                return this.isEipInner;
            }

            @Override
            public final java.lang.Object getIsForceSelectedZones() {
                return this.isForceSelectedZones;
            }

            @Override
            public final java.lang.Object getIsSetUserAndPassword() {
                return this.isSetUserAndPassword;
            }

            @Override
            public final java.lang.Object getKmsKeyId() {
                return this.kmsKeyId;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getNotifier() {
                return this.notifier;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getSecurityGroup() {
                return this.securityGroup;
            }

            @Override
            public final java.lang.Object getSelectedZones() {
                return this.selectedZones;
            }

            @Override
            public final java.lang.Object getServiceVersion() {
                return this.serviceVersion;
            }

            @Override
            public final java.lang.Object getUsername() {
                return this.username;
            }

            @Override
            public final java.lang.Object getUserPhoneNum() {
                return this.userPhoneNum;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("deployModule", om.valueToTree(this.getDeployModule()));
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                if (this.getConfig() != null) {
                    data.set("config", om.valueToTree(this.getConfig()));
                }
                if (this.getCrossZone() != null) {
                    data.set("crossZone", om.valueToTree(this.getCrossZone()));
                }
                if (this.getIsEipInner() != null) {
                    data.set("isEipInner", om.valueToTree(this.getIsEipInner()));
                }
                if (this.getIsForceSelectedZones() != null) {
                    data.set("isForceSelectedZones", om.valueToTree(this.getIsForceSelectedZones()));
                }
                if (this.getIsSetUserAndPassword() != null) {
                    data.set("isSetUserAndPassword", om.valueToTree(this.getIsSetUserAndPassword()));
                }
                if (this.getKmsKeyId() != null) {
                    data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getNotifier() != null) {
                    data.set("notifier", om.valueToTree(this.getNotifier()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getSecurityGroup() != null) {
                    data.set("securityGroup", om.valueToTree(this.getSecurityGroup()));
                }
                if (this.getSelectedZones() != null) {
                    data.set("selectedZones", om.valueToTree(this.getSelectedZones()));
                }
                if (this.getServiceVersion() != null) {
                    data.set("serviceVersion", om.valueToTree(this.getServiceVersion()));
                }
                if (this.getUsername() != null) {
                    data.set("username", om.valueToTree(this.getUsername()));
                }
                if (this.getUserPhoneNum() != null) {
                    data.set("userPhoneNum", om.valueToTree(this.getUserPhoneNum()));
                }
                if (this.getVpcId() != null) {
                    data.set("vpcId", om.valueToTree(this.getVpcId()));
                }
                if (this.getVSwitchIds() != null) {
                    data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                }
                if (this.getZoneId() != null) {
                    data.set("zoneId", om.valueToTree(this.getZoneId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DeployOptionProperty.Jsii$Proxy that = (DeployOptionProperty.Jsii$Proxy) o;

                if (!deployModule.equals(that.deployModule)) return false;
                if (!vSwitchId.equals(that.vSwitchId)) return false;
                if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
                if (this.crossZone != null ? !this.crossZone.equals(that.crossZone) : that.crossZone != null) return false;
                if (this.isEipInner != null ? !this.isEipInner.equals(that.isEipInner) : that.isEipInner != null) return false;
                if (this.isForceSelectedZones != null ? !this.isForceSelectedZones.equals(that.isForceSelectedZones) : that.isForceSelectedZones != null) return false;
                if (this.isSetUserAndPassword != null ? !this.isSetUserAndPassword.equals(that.isSetUserAndPassword) : that.isSetUserAndPassword != null) return false;
                if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.notifier != null ? !this.notifier.equals(that.notifier) : that.notifier != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.securityGroup != null ? !this.securityGroup.equals(that.securityGroup) : that.securityGroup != null) return false;
                if (this.selectedZones != null ? !this.selectedZones.equals(that.selectedZones) : that.selectedZones != null) return false;
                if (this.serviceVersion != null ? !this.serviceVersion.equals(that.serviceVersion) : that.serviceVersion != null) return false;
                if (this.username != null ? !this.username.equals(that.username) : that.username != null) return false;
                if (this.userPhoneNum != null ? !this.userPhoneNum.equals(that.userPhoneNum) : that.userPhoneNum != null) return false;
                if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
                if (this.vSwitchIds != null ? !this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds != null) return false;
                return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.deployModule.hashCode();
                result = 31 * result + (this.vSwitchId.hashCode());
                result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
                result = 31 * result + (this.crossZone != null ? this.crossZone.hashCode() : 0);
                result = 31 * result + (this.isEipInner != null ? this.isEipInner.hashCode() : 0);
                result = 31 * result + (this.isForceSelectedZones != null ? this.isForceSelectedZones.hashCode() : 0);
                result = 31 * result + (this.isSetUserAndPassword != null ? this.isSetUserAndPassword.hashCode() : 0);
                result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.notifier != null ? this.notifier.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.securityGroup != null ? this.securityGroup.hashCode() : 0);
                result = 31 * result + (this.selectedZones != null ? this.selectedZones.hashCode() : 0);
                result = 31 * result + (this.serviceVersion != null ? this.serviceVersion.hashCode() : 0);
                result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
                result = 31 * result + (this.userPhoneNum != null ? this.userPhoneNum.hashCode() : 0);
                result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
                result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
                result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosInstance.ServerlessConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ServerlessConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServerlessConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getReservedPublishCapacity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getReservedSubscribeCapacity();

        /**
         * @return a {@link Builder} of {@link ServerlessConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServerlessConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServerlessConfigProperty> {
            java.lang.Object reservedPublishCapacity;
            java.lang.Object reservedSubscribeCapacity;

            /**
             * Sets the value of {@link ServerlessConfigProperty#getReservedPublishCapacity}
             * @param reservedPublishCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reservedPublishCapacity(java.lang.Number reservedPublishCapacity) {
                this.reservedPublishCapacity = reservedPublishCapacity;
                return this;
            }

            /**
             * Sets the value of {@link ServerlessConfigProperty#getReservedPublishCapacity}
             * @param reservedPublishCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reservedPublishCapacity(com.aliyun.ros.cdk.core.IResolvable reservedPublishCapacity) {
                this.reservedPublishCapacity = reservedPublishCapacity;
                return this;
            }

            /**
             * Sets the value of {@link ServerlessConfigProperty#getReservedSubscribeCapacity}
             * @param reservedSubscribeCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reservedSubscribeCapacity(java.lang.Number reservedSubscribeCapacity) {
                this.reservedSubscribeCapacity = reservedSubscribeCapacity;
                return this;
            }

            /**
             * Sets the value of {@link ServerlessConfigProperty#getReservedSubscribeCapacity}
             * @param reservedSubscribeCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder reservedSubscribeCapacity(com.aliyun.ros.cdk.core.IResolvable reservedSubscribeCapacity) {
                this.reservedSubscribeCapacity = reservedSubscribeCapacity;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServerlessConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServerlessConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServerlessConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerlessConfigProperty {
            private final java.lang.Object reservedPublishCapacity;
            private final java.lang.Object reservedSubscribeCapacity;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.reservedPublishCapacity = software.amazon.jsii.Kernel.get(this, "reservedPublishCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.reservedSubscribeCapacity = software.amazon.jsii.Kernel.get(this, "reservedSubscribeCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.reservedPublishCapacity = java.util.Objects.requireNonNull(builder.reservedPublishCapacity, "reservedPublishCapacity is required");
                this.reservedSubscribeCapacity = java.util.Objects.requireNonNull(builder.reservedSubscribeCapacity, "reservedSubscribeCapacity is required");
            }

            @Override
            public final java.lang.Object getReservedPublishCapacity() {
                return this.reservedPublishCapacity;
            }

            @Override
            public final java.lang.Object getReservedSubscribeCapacity() {
                return this.reservedSubscribeCapacity;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("reservedPublishCapacity", om.valueToTree(this.getReservedPublishCapacity()));
                data.set("reservedSubscribeCapacity", om.valueToTree(this.getReservedSubscribeCapacity()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.RosInstance.ServerlessConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServerlessConfigProperty.Jsii$Proxy that = (ServerlessConfigProperty.Jsii$Proxy) o;

                if (!reservedPublishCapacity.equals(that.reservedPublishCapacity)) return false;
                return this.reservedSubscribeCapacity.equals(that.reservedSubscribeCapacity);
            }

            @Override
            public final int hashCode() {
                int result = this.reservedPublishCapacity.hashCode();
                result = 31 * result + (this.reservedSubscribeCapacity.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosInstance.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.RosInstance.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kafka.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kafka.RosInstance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.kafka.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kafka.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param deployType This parameter is required.
         */
        public Builder deployType(final java.lang.Number deployType) {
            this.props.deployType(deployType);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployType This parameter is required.
         */
        public Builder deployType(final com.aliyun.ros.cdk.core.IResolvable deployType) {
            this.props.deployType(deployType);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployOption This parameter is required.
         */
        public Builder deployOption(final com.aliyun.ros.cdk.core.IResolvable deployOption) {
            this.props.deployOption(deployOption);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployOption This parameter is required.
         */
        public Builder deployOption(final com.aliyun.ros.cdk.kafka.RosInstance.DeployOptionProperty deployOption) {
            this.props.deployOption(deployOption);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskSize This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskSize This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskType This parameter is required.
         */
        public Builder diskType(final java.lang.String diskType) {
            this.props.diskType(diskType);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskType This parameter is required.
         */
        public Builder diskType(final com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.props.diskType(diskType);
            return this;
        }

        /**
         * @return {@code this}
         * @param eipMax This parameter is required.
         */
        public Builder eipMax(final java.lang.Number eipMax) {
            this.props.eipMax(eipMax);
            return this;
        }
        /**
         * @return {@code this}
         * @param eipMax This parameter is required.
         */
        public Builder eipMax(final com.aliyun.ros.cdk.core.IResolvable eipMax) {
            this.props.eipMax(eipMax);
            return this;
        }

        /**
         * @return {@code this}
         * @param ioMax This parameter is required.
         */
        public Builder ioMax(final java.lang.Number ioMax) {
            this.props.ioMax(ioMax);
            return this;
        }
        /**
         * @return {@code this}
         * @param ioMax This parameter is required.
         */
        public Builder ioMax(final com.aliyun.ros.cdk.core.IResolvable ioMax) {
            this.props.ioMax(ioMax);
            return this;
        }

        /**
         * @return {@code this}
         * @param ioMaxSpec This parameter is required.
         */
        public Builder ioMaxSpec(final java.lang.String ioMaxSpec) {
            this.props.ioMaxSpec(ioMaxSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param ioMaxSpec This parameter is required.
         */
        public Builder ioMaxSpec(final com.aliyun.ros.cdk.core.IResolvable ioMaxSpec) {
            this.props.ioMaxSpec(ioMaxSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param openConnector This parameter is required.
         */
        public Builder openConnector(final java.lang.Boolean openConnector) {
            this.props.openConnector(openConnector);
            return this;
        }
        /**
         * @return {@code this}
         * @param openConnector This parameter is required.
         */
        public Builder openConnector(final com.aliyun.ros.cdk.core.IResolvable openConnector) {
            this.props.openConnector(openConnector);
            return this;
        }

        /**
         * @return {@code this}
         * @param partitionNum This parameter is required.
         */
        public Builder partitionNum(final java.lang.Number partitionNum) {
            this.props.partitionNum(partitionNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param partitionNum This parameter is required.
         */
        public Builder partitionNum(final com.aliyun.ros.cdk.core.IResolvable partitionNum) {
            this.props.partitionNum(partitionNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param serverlessConfig This parameter is required.
         */
        public Builder serverlessConfig(final com.aliyun.ros.cdk.core.IResolvable serverlessConfig) {
            this.props.serverlessConfig(serverlessConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param serverlessConfig This parameter is required.
         */
        public Builder serverlessConfig(final com.aliyun.ros.cdk.kafka.RosInstance.ServerlessConfigProperty serverlessConfig) {
            this.props.serverlessConfig(serverlessConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param specType This parameter is required.
         */
        public Builder specType(final java.lang.String specType) {
            this.props.specType(specType);
            return this;
        }
        /**
         * @return {@code this}
         * @param specType This parameter is required.
         */
        public Builder specType(final com.aliyun.ros.cdk.core.IResolvable specType) {
            this.props.specType(specType);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param topicQuota This parameter is required.
         */
        public Builder topicQuota(final java.lang.Number topicQuota) {
            this.props.topicQuota(topicQuota);
            return this;
        }
        /**
         * @return {@code this}
         * @param topicQuota This parameter is required.
         */
        public Builder topicQuota(final com.aliyun.ros.cdk.core.IResolvable topicQuota) {
            this.props.topicQuota(topicQuota);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kafka.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.kafka.RosInstance build() {
            return new com.aliyun.ros.cdk.kafka.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
