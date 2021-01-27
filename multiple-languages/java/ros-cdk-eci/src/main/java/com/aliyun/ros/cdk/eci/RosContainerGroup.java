package com.aliyun.ros.cdk.eci;

/**
 * A ROS template type:  `ALIYUN::ECI::ContainerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.579Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup")
public class RosContainerGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosContainerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosContainerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.eci.RosContainerGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECI::ContainerGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosContainerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.RosContainerGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrContainerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEniInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrEniInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Address() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getContainer() {
        return software.amazon.jsii.Kernel.get(this, "container", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "container", java.util.Objects.requireNonNull(value, "container is required"));
    }

    /**
     */
    public void setContainer(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "container", java.util.Objects.requireNonNull(value, "container is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getContainerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "containerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setContainerGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "containerGroupName", java.util.Objects.requireNonNull(value, "containerGroupName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getActiveDeadlineSeconds() {
        return software.amazon.jsii.Kernel.get(this, "activeDeadlineSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setActiveDeadlineSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "activeDeadlineSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return software.amazon.jsii.Kernel.get(this, "autoMatchImageCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoMatchImageCache(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoMatchImageCache", value);
    }

    /**
     */
    public void setAutoMatchImageCache(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoMatchImageCache", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getCpu() {
        return software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfig() {
        return software.amazon.jsii.Kernel.get(this, "dnsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsConfig", value);
    }

    /**
     */
    public void setDnsConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.eci.RosContainerGroup.DnsConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "dnsConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getEipInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEipInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eipInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostAliase() {
        return software.amazon.jsii.Kernel.get(this, "hostAliase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostAliase(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostAliase", value);
    }

    /**
     */
    public void setHostAliase(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "hostAliase", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredential() {
        return software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageRegistryCredential(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredential", value);
    }

    /**
     */
    public void setImageRegistryCredential(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredential", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getImageSnapshotId() {
        return software.amazon.jsii.Kernel.get(this, "imageSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setImageSnapshotId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageSnapshotId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitContainer() {
        return software.amazon.jsii.Kernel.get(this, "initContainer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitContainer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initContainer", value);
    }

    /**
     */
    public void setInitContainer(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "initContainer", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getIpv6AddressCount() {
        return software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setIpv6AddressCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ipv6AddressCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getMemory() {
        return software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRestartPolicy() {
        return software.amazon.jsii.Kernel.get(this, "restartPolicy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRestartPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restartPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextSysctl() {
        return software.amazon.jsii.Kernel.get(this, "securityContextSysctl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityContextSysctl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityContextSysctl", value);
    }

    /**
     */
    public void setSecurityContextSysctl(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "securityContextSysctl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsEnable() {
        return software.amazon.jsii.Kernel.get(this, "slsEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "slsEnable", value);
    }

    /**
     */
    public void setSlsEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getSpotPriceLimit() {
        return software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTag(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tag", value);
    }

    /**
     */
    public void setTag(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "tag", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getTerminationGracePeriodSeconds() {
        return software.amazon.jsii.Kernel.get(this, "terminationGracePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setTerminationGracePeriodSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "terminationGracePeriodSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolume() {
        return software.amazon.jsii.Kernel.get(this, "volume", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolume(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volume", value);
    }

    /**
     */
    public void setVolume(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "volume", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigFileVolumeConfigFileToPathProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigFileVolumeConfigFileToPathProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getContent() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigFileVolumeConfigFileToPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigFileVolumeConfigFileToPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigFileVolumeConfigFileToPathProperty> {
            private java.lang.String path;
            private java.lang.String content;

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(java.lang.String content) {
                this.content = content;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigFileVolumeConfigFileToPathProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigFileVolumeConfigFileToPathProperty build() {
                return new Jsii$Proxy(path, content);
            }
        }

        /**
         * An implementation for {@link ConfigFileVolumeConfigFileToPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigFileVolumeConfigFileToPathProperty {
            private final java.lang.String path;
            private final java.lang.String content;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String path, final java.lang.String content) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.path = java.util.Objects.requireNonNull(path, "path is required");
                this.content = content;
            }

            @Override
            public final java.lang.String getPath() {
                return this.path;
            }

            @Override
            public final java.lang.String getContent() {
                return this.content;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("path", om.valueToTree(this.getPath()));
                if (this.getContent() != null) {
                    data.set("content", om.valueToTree(this.getContent()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigFileVolumeConfigFileToPathProperty.Jsii$Proxy that = (ConfigFileVolumeConfigFileToPathProperty.Jsii$Proxy) o;

                if (!path.equals(that.path)) return false;
                return this.content != null ? this.content.equals(that.content) : that.content == null;
            }

            @Override
            public final int hashCode() {
                int result = this.path.hashCode();
                result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty")
    @software.amazon.jsii.Jsii.Proxy(ContainerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ContainerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getImage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getArg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getCommand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVar() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getImagePullPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbe() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMemory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbe() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContext() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStdin() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStdinOnce() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTty() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeMount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getWorkingDir() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ContainerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ContainerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ContainerProperty> {
            private java.lang.String image;
            private java.lang.String name;
            private java.util.List<java.lang.String> arg;
            private java.util.List<java.lang.String> command;
            private java.lang.Number cpu;
            private java.lang.Object environmentVar;
            private java.lang.String imagePullPolicy;
            private java.lang.Object livenessProbe;
            private java.lang.Number memory;
            private java.lang.Object port;
            private java.lang.Object readinessProbe;
            private java.lang.Object securityContext;
            private java.lang.Object stdin;
            private java.lang.Object stdinOnce;
            private java.lang.Object tty;
            private java.lang.Object volumeMount;
            private java.lang.String workingDir;

            /**
             * Sets the value of {@link ContainerProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getArg}
             * @param arg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arg(java.util.List<java.lang.String> arg) {
                this.arg = arg;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<java.lang.String> command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getCpu}
             * @param cpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(java.lang.Number cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getEnvironmentVar}
             * @param environmentVar the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentVar(com.aliyun.ros.cdk.core.IResolvable environmentVar) {
                this.environmentVar = environmentVar;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getEnvironmentVar}
             * @param environmentVar the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentVar(java.util.List<? extends java.lang.Object> environmentVar) {
                this.environmentVar = environmentVar;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getImagePullPolicy}
             * @param imagePullPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imagePullPolicy(java.lang.String imagePullPolicy) {
                this.imagePullPolicy = imagePullPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getLivenessProbe}
             * @param livenessProbe the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbe(com.aliyun.ros.cdk.core.IResolvable livenessProbe) {
                this.livenessProbe = livenessProbe;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getLivenessProbe}
             * @param livenessProbe the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbe(com.aliyun.ros.cdk.eci.RosContainerGroup.LivenessProbeProperty livenessProbe) {
                this.livenessProbe = livenessProbe;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getMemory}
             * @param memory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(java.lang.Number memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.util.List<? extends java.lang.Object> port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getReadinessProbe}
             * @param readinessProbe the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbe(com.aliyun.ros.cdk.core.IResolvable readinessProbe) {
                this.readinessProbe = readinessProbe;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getReadinessProbe}
             * @param readinessProbe the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbe(com.aliyun.ros.cdk.eci.RosContainerGroup.ReadinessProbeProperty readinessProbe) {
                this.readinessProbe = readinessProbe;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getSecurityContext}
             * @param securityContext the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContext(com.aliyun.ros.cdk.core.IResolvable securityContext) {
                this.securityContext = securityContext;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getSecurityContext}
             * @param securityContext the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContext(com.aliyun.ros.cdk.eci.RosContainerGroup.SecurityContextProperty securityContext) {
                this.securityContext = securityContext;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getStdin}
             * @param stdin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdin(java.lang.Boolean stdin) {
                this.stdin = stdin;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getStdin}
             * @param stdin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdin(com.aliyun.ros.cdk.core.IResolvable stdin) {
                this.stdin = stdin;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getStdinOnce}
             * @param stdinOnce the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdinOnce(java.lang.Boolean stdinOnce) {
                this.stdinOnce = stdinOnce;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getStdinOnce}
             * @param stdinOnce the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdinOnce(com.aliyun.ros.cdk.core.IResolvable stdinOnce) {
                this.stdinOnce = stdinOnce;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getTty}
             * @param tty the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tty(java.lang.Boolean tty) {
                this.tty = tty;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getTty}
             * @param tty the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tty(com.aliyun.ros.cdk.core.IResolvable tty) {
                this.tty = tty;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getVolumeMount}
             * @param volumeMount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMount(com.aliyun.ros.cdk.core.IResolvable volumeMount) {
                this.volumeMount = volumeMount;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getVolumeMount}
             * @param volumeMount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMount(java.util.List<? extends java.lang.Object> volumeMount) {
                this.volumeMount = volumeMount;
                return this;
            }

            /**
             * Sets the value of {@link ContainerProperty#getWorkingDir}
             * @param workingDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workingDir(java.lang.String workingDir) {
                this.workingDir = workingDir;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ContainerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ContainerProperty build() {
                return new Jsii$Proxy(image, name, arg, command, cpu, environmentVar, imagePullPolicy, livenessProbe, memory, port, readinessProbe, securityContext, stdin, stdinOnce, tty, volumeMount, workingDir);
            }
        }

        /**
         * An implementation for {@link ContainerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContainerProperty {
            private final java.lang.String image;
            private final java.lang.String name;
            private final java.util.List<java.lang.String> arg;
            private final java.util.List<java.lang.String> command;
            private final java.lang.Number cpu;
            private final java.lang.Object environmentVar;
            private final java.lang.String imagePullPolicy;
            private final java.lang.Object livenessProbe;
            private final java.lang.Number memory;
            private final java.lang.Object port;
            private final java.lang.Object readinessProbe;
            private final java.lang.Object securityContext;
            private final java.lang.Object stdin;
            private final java.lang.Object stdinOnce;
            private final java.lang.Object tty;
            private final java.lang.Object volumeMount;
            private final java.lang.String workingDir;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.arg = software.amazon.jsii.Kernel.get(this, "arg", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.environmentVar = software.amazon.jsii.Kernel.get(this, "environmentVar", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imagePullPolicy = software.amazon.jsii.Kernel.get(this, "imagePullPolicy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.livenessProbe = software.amazon.jsii.Kernel.get(this, "livenessProbe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbe = software.amazon.jsii.Kernel.get(this, "readinessProbe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityContext = software.amazon.jsii.Kernel.get(this, "securityContext", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stdin = software.amazon.jsii.Kernel.get(this, "stdin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stdinOnce = software.amazon.jsii.Kernel.get(this, "stdinOnce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tty = software.amazon.jsii.Kernel.get(this, "tty", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.volumeMount = software.amazon.jsii.Kernel.get(this, "volumeMount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String image, final java.lang.String name, final java.util.List<java.lang.String> arg, final java.util.List<java.lang.String> command, final java.lang.Number cpu, final java.lang.Object environmentVar, final java.lang.String imagePullPolicy, final java.lang.Object livenessProbe, final java.lang.Number memory, final java.lang.Object port, final java.lang.Object readinessProbe, final java.lang.Object securityContext, final java.lang.Object stdin, final java.lang.Object stdinOnce, final java.lang.Object tty, final java.lang.Object volumeMount, final java.lang.String workingDir) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.image = java.util.Objects.requireNonNull(image, "image is required");
                this.name = java.util.Objects.requireNonNull(name, "name is required");
                this.arg = arg;
                this.command = command;
                this.cpu = cpu;
                this.environmentVar = environmentVar;
                this.imagePullPolicy = imagePullPolicy;
                this.livenessProbe = livenessProbe;
                this.memory = memory;
                this.port = port;
                this.readinessProbe = readinessProbe;
                this.securityContext = securityContext;
                this.stdin = stdin;
                this.stdinOnce = stdinOnce;
                this.tty = tty;
                this.volumeMount = volumeMount;
                this.workingDir = workingDir;
            }

            @Override
            public final java.lang.String getImage() {
                return this.image;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.util.List<java.lang.String> getArg() {
                return this.arg;
            }

            @Override
            public final java.util.List<java.lang.String> getCommand() {
                return this.command;
            }

            @Override
            public final java.lang.Number getCpu() {
                return this.cpu;
            }

            @Override
            public final java.lang.Object getEnvironmentVar() {
                return this.environmentVar;
            }

            @Override
            public final java.lang.String getImagePullPolicy() {
                return this.imagePullPolicy;
            }

            @Override
            public final java.lang.Object getLivenessProbe() {
                return this.livenessProbe;
            }

            @Override
            public final java.lang.Number getMemory() {
                return this.memory;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getReadinessProbe() {
                return this.readinessProbe;
            }

            @Override
            public final java.lang.Object getSecurityContext() {
                return this.securityContext;
            }

            @Override
            public final java.lang.Object getStdin() {
                return this.stdin;
            }

            @Override
            public final java.lang.Object getStdinOnce() {
                return this.stdinOnce;
            }

            @Override
            public final java.lang.Object getTty() {
                return this.tty;
            }

            @Override
            public final java.lang.Object getVolumeMount() {
                return this.volumeMount;
            }

            @Override
            public final java.lang.String getWorkingDir() {
                return this.workingDir;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("image", om.valueToTree(this.getImage()));
                data.set("name", om.valueToTree(this.getName()));
                if (this.getArg() != null) {
                    data.set("arg", om.valueToTree(this.getArg()));
                }
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }
                if (this.getCpu() != null) {
                    data.set("cpu", om.valueToTree(this.getCpu()));
                }
                if (this.getEnvironmentVar() != null) {
                    data.set("environmentVar", om.valueToTree(this.getEnvironmentVar()));
                }
                if (this.getImagePullPolicy() != null) {
                    data.set("imagePullPolicy", om.valueToTree(this.getImagePullPolicy()));
                }
                if (this.getLivenessProbe() != null) {
                    data.set("livenessProbe", om.valueToTree(this.getLivenessProbe()));
                }
                if (this.getMemory() != null) {
                    data.set("memory", om.valueToTree(this.getMemory()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getReadinessProbe() != null) {
                    data.set("readinessProbe", om.valueToTree(this.getReadinessProbe()));
                }
                if (this.getSecurityContext() != null) {
                    data.set("securityContext", om.valueToTree(this.getSecurityContext()));
                }
                if (this.getStdin() != null) {
                    data.set("stdin", om.valueToTree(this.getStdin()));
                }
                if (this.getStdinOnce() != null) {
                    data.set("stdinOnce", om.valueToTree(this.getStdinOnce()));
                }
                if (this.getTty() != null) {
                    data.set("tty", om.valueToTree(this.getTty()));
                }
                if (this.getVolumeMount() != null) {
                    data.set("volumeMount", om.valueToTree(this.getVolumeMount()));
                }
                if (this.getWorkingDir() != null) {
                    data.set("workingDir", om.valueToTree(this.getWorkingDir()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ContainerProperty.Jsii$Proxy that = (ContainerProperty.Jsii$Proxy) o;

                if (!image.equals(that.image)) return false;
                if (!name.equals(that.name)) return false;
                if (this.arg != null ? !this.arg.equals(that.arg) : that.arg != null) return false;
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
                if (this.environmentVar != null ? !this.environmentVar.equals(that.environmentVar) : that.environmentVar != null) return false;
                if (this.imagePullPolicy != null ? !this.imagePullPolicy.equals(that.imagePullPolicy) : that.imagePullPolicy != null) return false;
                if (this.livenessProbe != null ? !this.livenessProbe.equals(that.livenessProbe) : that.livenessProbe != null) return false;
                if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.readinessProbe != null ? !this.readinessProbe.equals(that.readinessProbe) : that.readinessProbe != null) return false;
                if (this.securityContext != null ? !this.securityContext.equals(that.securityContext) : that.securityContext != null) return false;
                if (this.stdin != null ? !this.stdin.equals(that.stdin) : that.stdin != null) return false;
                if (this.stdinOnce != null ? !this.stdinOnce.equals(that.stdinOnce) : that.stdinOnce != null) return false;
                if (this.tty != null ? !this.tty.equals(that.tty) : that.tty != null) return false;
                if (this.volumeMount != null ? !this.volumeMount.equals(that.volumeMount) : that.volumeMount != null) return false;
                return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
            }

            @Override
            public final int hashCode() {
                int result = this.image.hashCode();
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.arg != null ? this.arg.hashCode() : 0);
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
                result = 31 * result + (this.environmentVar != null ? this.environmentVar.hashCode() : 0);
                result = 31 * result + (this.imagePullPolicy != null ? this.imagePullPolicy.hashCode() : 0);
                result = 31 * result + (this.livenessProbe != null ? this.livenessProbe.hashCode() : 0);
                result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.readinessProbe != null ? this.readinessProbe.hashCode() : 0);
                result = 31 * result + (this.securityContext != null ? this.securityContext.hashCode() : 0);
                result = 31 * result + (this.stdin != null ? this.stdin.hashCode() : 0);
                result = 31 * result + (this.stdinOnce != null ? this.stdinOnce.hashCode() : 0);
                result = 31 * result + (this.tty != null ? this.tty.hashCode() : 0);
                result = 31 * result + (this.volumeMount != null ? this.volumeMount.hashCode() : 0);
                result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(DnsConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DnsConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getNameServer() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOption() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getSearch() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DnsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DnsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DnsConfigProperty> {
            private java.util.List<java.lang.String> nameServer;
            private java.lang.Object option;
            private java.util.List<java.lang.String> search;

            /**
             * Sets the value of {@link DnsConfigProperty#getNameServer}
             * @param nameServer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nameServer(java.util.List<java.lang.String> nameServer) {
                this.nameServer = nameServer;
                return this;
            }

            /**
             * Sets the value of {@link DnsConfigProperty#getOption}
             * @param option the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder option(com.aliyun.ros.cdk.core.IResolvable option) {
                this.option = option;
                return this;
            }

            /**
             * Sets the value of {@link DnsConfigProperty#getOption}
             * @param option the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder option(java.util.List<? extends java.lang.Object> option) {
                this.option = option;
                return this;
            }

            /**
             * Sets the value of {@link DnsConfigProperty#getSearch}
             * @param search the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder search(java.util.List<java.lang.String> search) {
                this.search = search;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DnsConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DnsConfigProperty build() {
                return new Jsii$Proxy(nameServer, option, search);
            }
        }

        /**
         * An implementation for {@link DnsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DnsConfigProperty {
            private final java.util.List<java.lang.String> nameServer;
            private final java.lang.Object option;
            private final java.util.List<java.lang.String> search;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.nameServer = software.amazon.jsii.Kernel.get(this, "nameServer", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.option = software.amazon.jsii.Kernel.get(this, "option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.search = software.amazon.jsii.Kernel.get(this, "search", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.util.List<java.lang.String> nameServer, final java.lang.Object option, final java.util.List<java.lang.String> search) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.nameServer = nameServer;
                this.option = option;
                this.search = search;
            }

            @Override
            public final java.util.List<java.lang.String> getNameServer() {
                return this.nameServer;
            }

            @Override
            public final java.lang.Object getOption() {
                return this.option;
            }

            @Override
            public final java.util.List<java.lang.String> getSearch() {
                return this.search;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getNameServer() != null) {
                    data.set("nameServer", om.valueToTree(this.getNameServer()));
                }
                if (this.getOption() != null) {
                    data.set("option", om.valueToTree(this.getOption()));
                }
                if (this.getSearch() != null) {
                    data.set("search", om.valueToTree(this.getSearch()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DnsConfigProperty.Jsii$Proxy that = (DnsConfigProperty.Jsii$Proxy) o;

                if (this.nameServer != null ? !this.nameServer.equals(that.nameServer) : that.nameServer != null) return false;
                if (this.option != null ? !this.option.equals(that.option) : that.option != null) return false;
                return this.search != null ? this.search.equals(that.search) : that.search == null;
            }

            @Override
            public final int hashCode() {
                int result = this.nameServer != null ? this.nameServer.hashCode() : 0;
                result = 31 * result + (this.option != null ? this.option.hashCode() : 0);
                result = 31 * result + (this.search != null ? this.search.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty")
    @software.amazon.jsii.Jsii.Proxy(EnvironmentVarProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EnvironmentVarProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getFieldRefFieldPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EnvironmentVarProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EnvironmentVarProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EnvironmentVarProperty> {
            private java.lang.String fieldRefFieldPath;
            private java.lang.String key;
            private java.lang.String value;

            /**
             * Sets the value of {@link EnvironmentVarProperty#getFieldRefFieldPath}
             * @param fieldRefFieldPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldRefFieldPath(java.lang.String fieldRefFieldPath) {
                this.fieldRefFieldPath = fieldRefFieldPath;
                return this;
            }

            /**
             * Sets the value of {@link EnvironmentVarProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link EnvironmentVarProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EnvironmentVarProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EnvironmentVarProperty build() {
                return new Jsii$Proxy(fieldRefFieldPath, key, value);
            }
        }

        /**
         * An implementation for {@link EnvironmentVarProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvironmentVarProperty {
            private final java.lang.String fieldRefFieldPath;
            private final java.lang.String key;
            private final java.lang.String value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldRefFieldPath = software.amazon.jsii.Kernel.get(this, "fieldRefFieldPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String fieldRefFieldPath, final java.lang.String key, final java.lang.String value) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldRefFieldPath = fieldRefFieldPath;
                this.key = key;
                this.value = value;
            }

            @Override
            public final java.lang.String getFieldRefFieldPath() {
                return this.fieldRefFieldPath;
            }

            @Override
            public final java.lang.String getKey() {
                return this.key;
            }

            @Override
            public final java.lang.String getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFieldRefFieldPath() != null) {
                    data.set("fieldRefFieldPath", om.valueToTree(this.getFieldRefFieldPath()));
                }
                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EnvironmentVarProperty.Jsii$Proxy that = (EnvironmentVarProperty.Jsii$Proxy) o;

                if (this.fieldRefFieldPath != null ? !this.fieldRefFieldPath.equals(that.fieldRefFieldPath) : that.fieldRefFieldPath != null) return false;
                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fieldRefFieldPath != null ? this.fieldRefFieldPath.hashCode() : 0;
                result = 31 * result + (this.key != null ? this.key.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty")
    @software.amazon.jsii.Jsii.Proxy(HostAliaseProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HostAliaseProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getHostname() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIp() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HostAliaseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HostAliaseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HostAliaseProperty> {
            private java.util.List<java.lang.String> hostname;
            private java.lang.String ip;

            /**
             * Sets the value of {@link HostAliaseProperty#getHostname}
             * @param hostname the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostname(java.util.List<java.lang.String> hostname) {
                this.hostname = hostname;
                return this;
            }

            /**
             * Sets the value of {@link HostAliaseProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HostAliaseProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HostAliaseProperty build() {
                return new Jsii$Proxy(hostname, ip);
            }
        }

        /**
         * An implementation for {@link HostAliaseProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostAliaseProperty {
            private final java.util.List<java.lang.String> hostname;
            private final java.lang.String ip;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.hostname = software.amazon.jsii.Kernel.get(this, "hostname", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.util.List<java.lang.String> hostname, final java.lang.String ip) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.hostname = hostname;
                this.ip = ip;
            }

            @Override
            public final java.util.List<java.lang.String> getHostname() {
                return this.hostname;
            }

            @Override
            public final java.lang.String getIp() {
                return this.ip;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHostname() != null) {
                    data.set("hostname", om.valueToTree(this.getHostname()));
                }
                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HostAliaseProperty.Jsii$Proxy that = (HostAliaseProperty.Jsii$Proxy) o;

                if (this.hostname != null ? !this.hostname.equals(that.hostname) : that.hostname != null) return false;
                return this.ip != null ? this.ip.equals(that.ip) : that.ip == null;
            }

            @Override
            public final int hashCode() {
                int result = this.hostname != null ? this.hostname.hashCode() : 0;
                result = 31 * result + (this.ip != null ? this.ip.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty")
    @software.amazon.jsii.Jsii.Proxy(ImageRegistryCredentialProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ImageRegistryCredentialProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getPassword();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getServer();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getUserName();

        /**
         * @return a {@link Builder} of {@link ImageRegistryCredentialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ImageRegistryCredentialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ImageRegistryCredentialProperty> {
            private java.lang.String password;
            private java.lang.String server;
            private java.lang.String userName;

            /**
             * Sets the value of {@link ImageRegistryCredentialProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link ImageRegistryCredentialProperty#getServer}
             * @param server the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder server(java.lang.String server) {
                this.server = server;
                return this;
            }

            /**
             * Sets the value of {@link ImageRegistryCredentialProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ImageRegistryCredentialProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ImageRegistryCredentialProperty build() {
                return new Jsii$Proxy(password, server, userName);
            }
        }

        /**
         * An implementation for {@link ImageRegistryCredentialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageRegistryCredentialProperty {
            private final java.lang.String password;
            private final java.lang.String server;
            private final java.lang.String userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.server = software.amazon.jsii.Kernel.get(this, "server", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String password, final java.lang.String server, final java.lang.String userName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.password = java.util.Objects.requireNonNull(password, "password is required");
                this.server = java.util.Objects.requireNonNull(server, "server is required");
                this.userName = java.util.Objects.requireNonNull(userName, "userName is required");
            }

            @Override
            public final java.lang.String getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.String getServer() {
                return this.server;
            }

            @Override
            public final java.lang.String getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("password", om.valueToTree(this.getPassword()));
                data.set("server", om.valueToTree(this.getServer()));
                data.set("userName", om.valueToTree(this.getUserName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ImageRegistryCredentialProperty.Jsii$Proxy that = (ImageRegistryCredentialProperty.Jsii$Proxy) o;

                if (!password.equals(that.password)) return false;
                if (!server.equals(that.server)) return false;
                return this.userName.equals(that.userName);
            }

            @Override
            public final int hashCode() {
                int result = this.password.hashCode();
                result = 31 * result + (this.server.hashCode());
                result = 31 * result + (this.userName.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty")
    @software.amazon.jsii.Jsii.Proxy(InitContainerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InitContainerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getArg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getCommand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVar() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getImage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getImagePullPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMemory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContext() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeMount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getWorkingDir() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InitContainerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InitContainerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InitContainerProperty> {
            private java.util.List<java.lang.String> arg;
            private java.util.List<java.lang.String> command;
            private java.lang.Number cpu;
            private java.lang.Object environmentVar;
            private java.lang.String image;
            private java.lang.String imagePullPolicy;
            private java.lang.Number memory;
            private java.lang.String name;
            private java.lang.Object port;
            private java.lang.Object securityContext;
            private java.lang.Object volumeMount;
            private java.lang.String workingDir;

            /**
             * Sets the value of {@link InitContainerProperty#getArg}
             * @param arg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arg(java.util.List<java.lang.String> arg) {
                this.arg = arg;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<java.lang.String> command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getCpu}
             * @param cpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(java.lang.Number cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getEnvironmentVar}
             * @param environmentVar the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentVar(com.aliyun.ros.cdk.core.IResolvable environmentVar) {
                this.environmentVar = environmentVar;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getEnvironmentVar}
             * @param environmentVar the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentVar(java.util.List<? extends java.lang.Object> environmentVar) {
                this.environmentVar = environmentVar;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getImage}
             * @param image the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getImagePullPolicy}
             * @param imagePullPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imagePullPolicy(java.lang.String imagePullPolicy) {
                this.imagePullPolicy = imagePullPolicy;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getMemory}
             * @param memory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(java.lang.Number memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.util.List<? extends java.lang.Object> port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getSecurityContext}
             * @param securityContext the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContext(com.aliyun.ros.cdk.core.IResolvable securityContext) {
                this.securityContext = securityContext;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getSecurityContext}
             * @param securityContext the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContext(com.aliyun.ros.cdk.eci.RosContainerGroup.SecurityContextProperty securityContext) {
                this.securityContext = securityContext;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getVolumeMount}
             * @param volumeMount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMount(com.aliyun.ros.cdk.core.IResolvable volumeMount) {
                this.volumeMount = volumeMount;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getVolumeMount}
             * @param volumeMount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMount(java.util.List<? extends java.lang.Object> volumeMount) {
                this.volumeMount = volumeMount;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerProperty#getWorkingDir}
             * @param workingDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workingDir(java.lang.String workingDir) {
                this.workingDir = workingDir;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InitContainerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InitContainerProperty build() {
                return new Jsii$Proxy(arg, command, cpu, environmentVar, image, imagePullPolicy, memory, name, port, securityContext, volumeMount, workingDir);
            }
        }

        /**
         * An implementation for {@link InitContainerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InitContainerProperty {
            private final java.util.List<java.lang.String> arg;
            private final java.util.List<java.lang.String> command;
            private final java.lang.Number cpu;
            private final java.lang.Object environmentVar;
            private final java.lang.String image;
            private final java.lang.String imagePullPolicy;
            private final java.lang.Number memory;
            private final java.lang.String name;
            private final java.lang.Object port;
            private final java.lang.Object securityContext;
            private final java.lang.Object volumeMount;
            private final java.lang.String workingDir;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.arg = software.amazon.jsii.Kernel.get(this, "arg", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.environmentVar = software.amazon.jsii.Kernel.get(this, "environmentVar", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.imagePullPolicy = software.amazon.jsii.Kernel.get(this, "imagePullPolicy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityContext = software.amazon.jsii.Kernel.get(this, "securityContext", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.volumeMount = software.amazon.jsii.Kernel.get(this, "volumeMount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.util.List<java.lang.String> arg, final java.util.List<java.lang.String> command, final java.lang.Number cpu, final java.lang.Object environmentVar, final java.lang.String image, final java.lang.String imagePullPolicy, final java.lang.Number memory, final java.lang.String name, final java.lang.Object port, final java.lang.Object securityContext, final java.lang.Object volumeMount, final java.lang.String workingDir) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.arg = arg;
                this.command = command;
                this.cpu = cpu;
                this.environmentVar = environmentVar;
                this.image = image;
                this.imagePullPolicy = imagePullPolicy;
                this.memory = memory;
                this.name = name;
                this.port = port;
                this.securityContext = securityContext;
                this.volumeMount = volumeMount;
                this.workingDir = workingDir;
            }

            @Override
            public final java.util.List<java.lang.String> getArg() {
                return this.arg;
            }

            @Override
            public final java.util.List<java.lang.String> getCommand() {
                return this.command;
            }

            @Override
            public final java.lang.Number getCpu() {
                return this.cpu;
            }

            @Override
            public final java.lang.Object getEnvironmentVar() {
                return this.environmentVar;
            }

            @Override
            public final java.lang.String getImage() {
                return this.image;
            }

            @Override
            public final java.lang.String getImagePullPolicy() {
                return this.imagePullPolicy;
            }

            @Override
            public final java.lang.Number getMemory() {
                return this.memory;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getSecurityContext() {
                return this.securityContext;
            }

            @Override
            public final java.lang.Object getVolumeMount() {
                return this.volumeMount;
            }

            @Override
            public final java.lang.String getWorkingDir() {
                return this.workingDir;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getArg() != null) {
                    data.set("arg", om.valueToTree(this.getArg()));
                }
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }
                if (this.getCpu() != null) {
                    data.set("cpu", om.valueToTree(this.getCpu()));
                }
                if (this.getEnvironmentVar() != null) {
                    data.set("environmentVar", om.valueToTree(this.getEnvironmentVar()));
                }
                if (this.getImage() != null) {
                    data.set("image", om.valueToTree(this.getImage()));
                }
                if (this.getImagePullPolicy() != null) {
                    data.set("imagePullPolicy", om.valueToTree(this.getImagePullPolicy()));
                }
                if (this.getMemory() != null) {
                    data.set("memory", om.valueToTree(this.getMemory()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getSecurityContext() != null) {
                    data.set("securityContext", om.valueToTree(this.getSecurityContext()));
                }
                if (this.getVolumeMount() != null) {
                    data.set("volumeMount", om.valueToTree(this.getVolumeMount()));
                }
                if (this.getWorkingDir() != null) {
                    data.set("workingDir", om.valueToTree(this.getWorkingDir()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InitContainerProperty.Jsii$Proxy that = (InitContainerProperty.Jsii$Proxy) o;

                if (this.arg != null ? !this.arg.equals(that.arg) : that.arg != null) return false;
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
                if (this.environmentVar != null ? !this.environmentVar.equals(that.environmentVar) : that.environmentVar != null) return false;
                if (this.image != null ? !this.image.equals(that.image) : that.image != null) return false;
                if (this.imagePullPolicy != null ? !this.imagePullPolicy.equals(that.imagePullPolicy) : that.imagePullPolicy != null) return false;
                if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.securityContext != null ? !this.securityContext.equals(that.securityContext) : that.securityContext != null) return false;
                if (this.volumeMount != null ? !this.volumeMount.equals(that.volumeMount) : that.volumeMount != null) return false;
                return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
            }

            @Override
            public final int hashCode() {
                int result = this.arg != null ? this.arg.hashCode() : 0;
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
                result = 31 * result + (this.environmentVar != null ? this.environmentVar.hashCode() : 0);
                result = 31 * result + (this.image != null ? this.image.hashCode() : 0);
                result = 31 * result + (this.imagePullPolicy != null ? this.imagePullPolicy.hashCode() : 0);
                result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.securityContext != null ? this.securityContext.hashCode() : 0);
                result = 31 * result + (this.volumeMount != null ? this.volumeMount.hashCode() : 0);
                result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty")
    @software.amazon.jsii.Jsii.Proxy(LivenessProbeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LivenessProbeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExecCommand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getFailureThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getHttpGetPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getHttpGetPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getHttpGetScheme() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getInitialDelaySeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getPeriodSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getSuccessThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getTcpSocketPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getTimeoutSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LivenessProbeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LivenessProbeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LivenessProbeProperty> {
            private java.util.List<java.lang.String> execCommand;
            private java.lang.Number failureThreshold;
            private java.lang.String httpGetPath;
            private java.lang.Number httpGetPort;
            private java.lang.String httpGetScheme;
            private java.lang.Number initialDelaySeconds;
            private java.lang.Number periodSeconds;
            private java.lang.Number successThreshold;
            private java.lang.Number tcpSocketPort;
            private java.lang.Number timeoutSeconds;

            /**
             * Sets the value of {@link LivenessProbeProperty#getExecCommand}
             * @param execCommand the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder execCommand(java.util.List<java.lang.String> execCommand) {
                this.execCommand = execCommand;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(java.lang.Number failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getHttpGetPath}
             * @param httpGetPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetPath(java.lang.String httpGetPath) {
                this.httpGetPath = httpGetPath;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getHttpGetPort}
             * @param httpGetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetPort(java.lang.Number httpGetPort) {
                this.httpGetPort = httpGetPort;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getHttpGetScheme}
             * @param httpGetScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetScheme(java.lang.String httpGetScheme) {
                this.httpGetScheme = httpGetScheme;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(java.lang.Number initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(java.lang.Number periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(java.lang.Number successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getTcpSocketPort}
             * @param tcpSocketPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tcpSocketPort(java.lang.Number tcpSocketPort) {
                this.tcpSocketPort = tcpSocketPort;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProbeProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(java.lang.Number timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LivenessProbeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LivenessProbeProperty build() {
                return new Jsii$Proxy(execCommand, failureThreshold, httpGetPath, httpGetPort, httpGetScheme, initialDelaySeconds, periodSeconds, successThreshold, tcpSocketPort, timeoutSeconds);
            }
        }

        /**
         * An implementation for {@link LivenessProbeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LivenessProbeProperty {
            private final java.util.List<java.lang.String> execCommand;
            private final java.lang.Number failureThreshold;
            private final java.lang.String httpGetPath;
            private final java.lang.Number httpGetPort;
            private final java.lang.String httpGetScheme;
            private final java.lang.Number initialDelaySeconds;
            private final java.lang.Number periodSeconds;
            private final java.lang.Number successThreshold;
            private final java.lang.Number tcpSocketPort;
            private final java.lang.Number timeoutSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.execCommand = software.amazon.jsii.Kernel.get(this, "execCommand", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.failureThreshold = software.amazon.jsii.Kernel.get(this, "failureThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.httpGetPath = software.amazon.jsii.Kernel.get(this, "httpGetPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.httpGetPort = software.amazon.jsii.Kernel.get(this, "httpGetPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.httpGetScheme = software.amazon.jsii.Kernel.get(this, "httpGetScheme", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.initialDelaySeconds = software.amazon.jsii.Kernel.get(this, "initialDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.periodSeconds = software.amazon.jsii.Kernel.get(this, "periodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.successThreshold = software.amazon.jsii.Kernel.get(this, "successThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.tcpSocketPort = software.amazon.jsii.Kernel.get(this, "tcpSocketPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.timeoutSeconds = software.amazon.jsii.Kernel.get(this, "timeoutSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.util.List<java.lang.String> execCommand, final java.lang.Number failureThreshold, final java.lang.String httpGetPath, final java.lang.Number httpGetPort, final java.lang.String httpGetScheme, final java.lang.Number initialDelaySeconds, final java.lang.Number periodSeconds, final java.lang.Number successThreshold, final java.lang.Number tcpSocketPort, final java.lang.Number timeoutSeconds) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.execCommand = execCommand;
                this.failureThreshold = failureThreshold;
                this.httpGetPath = httpGetPath;
                this.httpGetPort = httpGetPort;
                this.httpGetScheme = httpGetScheme;
                this.initialDelaySeconds = initialDelaySeconds;
                this.periodSeconds = periodSeconds;
                this.successThreshold = successThreshold;
                this.tcpSocketPort = tcpSocketPort;
                this.timeoutSeconds = timeoutSeconds;
            }

            @Override
            public final java.util.List<java.lang.String> getExecCommand() {
                return this.execCommand;
            }

            @Override
            public final java.lang.Number getFailureThreshold() {
                return this.failureThreshold;
            }

            @Override
            public final java.lang.String getHttpGetPath() {
                return this.httpGetPath;
            }

            @Override
            public final java.lang.Number getHttpGetPort() {
                return this.httpGetPort;
            }

            @Override
            public final java.lang.String getHttpGetScheme() {
                return this.httpGetScheme;
            }

            @Override
            public final java.lang.Number getInitialDelaySeconds() {
                return this.initialDelaySeconds;
            }

            @Override
            public final java.lang.Number getPeriodSeconds() {
                return this.periodSeconds;
            }

            @Override
            public final java.lang.Number getSuccessThreshold() {
                return this.successThreshold;
            }

            @Override
            public final java.lang.Number getTcpSocketPort() {
                return this.tcpSocketPort;
            }

            @Override
            public final java.lang.Number getTimeoutSeconds() {
                return this.timeoutSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExecCommand() != null) {
                    data.set("execCommand", om.valueToTree(this.getExecCommand()));
                }
                if (this.getFailureThreshold() != null) {
                    data.set("failureThreshold", om.valueToTree(this.getFailureThreshold()));
                }
                if (this.getHttpGetPath() != null) {
                    data.set("httpGetPath", om.valueToTree(this.getHttpGetPath()));
                }
                if (this.getHttpGetPort() != null) {
                    data.set("httpGetPort", om.valueToTree(this.getHttpGetPort()));
                }
                if (this.getHttpGetScheme() != null) {
                    data.set("httpGetScheme", om.valueToTree(this.getHttpGetScheme()));
                }
                if (this.getInitialDelaySeconds() != null) {
                    data.set("initialDelaySeconds", om.valueToTree(this.getInitialDelaySeconds()));
                }
                if (this.getPeriodSeconds() != null) {
                    data.set("periodSeconds", om.valueToTree(this.getPeriodSeconds()));
                }
                if (this.getSuccessThreshold() != null) {
                    data.set("successThreshold", om.valueToTree(this.getSuccessThreshold()));
                }
                if (this.getTcpSocketPort() != null) {
                    data.set("tcpSocketPort", om.valueToTree(this.getTcpSocketPort()));
                }
                if (this.getTimeoutSeconds() != null) {
                    data.set("timeoutSeconds", om.valueToTree(this.getTimeoutSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LivenessProbeProperty.Jsii$Proxy that = (LivenessProbeProperty.Jsii$Proxy) o;

                if (this.execCommand != null ? !this.execCommand.equals(that.execCommand) : that.execCommand != null) return false;
                if (this.failureThreshold != null ? !this.failureThreshold.equals(that.failureThreshold) : that.failureThreshold != null) return false;
                if (this.httpGetPath != null ? !this.httpGetPath.equals(that.httpGetPath) : that.httpGetPath != null) return false;
                if (this.httpGetPort != null ? !this.httpGetPort.equals(that.httpGetPort) : that.httpGetPort != null) return false;
                if (this.httpGetScheme != null ? !this.httpGetScheme.equals(that.httpGetScheme) : that.httpGetScheme != null) return false;
                if (this.initialDelaySeconds != null ? !this.initialDelaySeconds.equals(that.initialDelaySeconds) : that.initialDelaySeconds != null) return false;
                if (this.periodSeconds != null ? !this.periodSeconds.equals(that.periodSeconds) : that.periodSeconds != null) return false;
                if (this.successThreshold != null ? !this.successThreshold.equals(that.successThreshold) : that.successThreshold != null) return false;
                if (this.tcpSocketPort != null ? !this.tcpSocketPort.equals(that.tcpSocketPort) : that.tcpSocketPort != null) return false;
                return this.timeoutSeconds != null ? this.timeoutSeconds.equals(that.timeoutSeconds) : that.timeoutSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.execCommand != null ? this.execCommand.hashCode() : 0;
                result = 31 * result + (this.failureThreshold != null ? this.failureThreshold.hashCode() : 0);
                result = 31 * result + (this.httpGetPath != null ? this.httpGetPath.hashCode() : 0);
                result = 31 * result + (this.httpGetPort != null ? this.httpGetPort.hashCode() : 0);
                result = 31 * result + (this.httpGetScheme != null ? this.httpGetScheme.hashCode() : 0);
                result = 31 * result + (this.initialDelaySeconds != null ? this.initialDelaySeconds.hashCode() : 0);
                result = 31 * result + (this.periodSeconds != null ? this.periodSeconds.hashCode() : 0);
                result = 31 * result + (this.successThreshold != null ? this.successThreshold.hashCode() : 0);
                result = 31 * result + (this.tcpSocketPort != null ? this.tcpSocketPort.hashCode() : 0);
                result = 31 * result + (this.timeoutSeconds != null ? this.timeoutSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty")
    @software.amazon.jsii.Jsii.Proxy(OptionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OptionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OptionProperty> {
            private java.lang.String name;
            private java.lang.String value;

            /**
             * Sets the value of {@link OptionProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link OptionProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OptionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OptionProperty build() {
                return new Jsii$Proxy(name, value);
            }
        }

        /**
         * An implementation for {@link OptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OptionProperty {
            private final java.lang.String name;
            private final java.lang.String value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String name, final java.lang.String value) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = name;
                this.value = value;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.lang.String getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OptionProperty.Jsii$Proxy that = (OptionProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty")
    @software.amazon.jsii.Jsii.Proxy(PortProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PortProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getProtocol() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PortProperty> {
            private java.lang.Number port;
            private java.lang.String protocol;

            /**
             * Sets the value of {@link PortProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link PortProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PortProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PortProperty build() {
                return new Jsii$Proxy(port, protocol);
            }
        }

        /**
         * An implementation for {@link PortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PortProperty {
            private final java.lang.Number port;
            private final java.lang.String protocol;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Number port, final java.lang.String protocol) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.port = port;
                this.protocol = protocol;
            }

            @Override
            public final java.lang.Number getPort() {
                return this.port;
            }

            @Override
            public final java.lang.String getProtocol() {
                return this.protocol;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PortProperty.Jsii$Proxy that = (PortProperty.Jsii$Proxy) o;

                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                return this.protocol != null ? this.protocol.equals(that.protocol) : that.protocol == null;
            }

            @Override
            public final int hashCode() {
                int result = this.port != null ? this.port.hashCode() : 0;
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty")
    @software.amazon.jsii.Jsii.Proxy(ReadinessProbeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReadinessProbeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExecCommand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getFailureThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getHttpGetPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getHttpGetPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getHttpGetScheme() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getInitialDelaySeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getPeriodSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getSuccessThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getTcpSocketPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getTimeoutSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReadinessProbeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReadinessProbeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReadinessProbeProperty> {
            private java.util.List<java.lang.String> execCommand;
            private java.lang.Number failureThreshold;
            private java.lang.String httpGetPath;
            private java.lang.Number httpGetPort;
            private java.lang.String httpGetScheme;
            private java.lang.Number initialDelaySeconds;
            private java.lang.Number periodSeconds;
            private java.lang.Number successThreshold;
            private java.lang.Number tcpSocketPort;
            private java.lang.Number timeoutSeconds;

            /**
             * Sets the value of {@link ReadinessProbeProperty#getExecCommand}
             * @param execCommand the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder execCommand(java.util.List<java.lang.String> execCommand) {
                this.execCommand = execCommand;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(java.lang.Number failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getHttpGetPath}
             * @param httpGetPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetPath(java.lang.String httpGetPath) {
                this.httpGetPath = httpGetPath;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getHttpGetPort}
             * @param httpGetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetPort(java.lang.Number httpGetPort) {
                this.httpGetPort = httpGetPort;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getHttpGetScheme}
             * @param httpGetScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetScheme(java.lang.String httpGetScheme) {
                this.httpGetScheme = httpGetScheme;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(java.lang.Number initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(java.lang.Number periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(java.lang.Number successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getTcpSocketPort}
             * @param tcpSocketPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tcpSocketPort(java.lang.Number tcpSocketPort) {
                this.tcpSocketPort = tcpSocketPort;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProbeProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(java.lang.Number timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReadinessProbeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReadinessProbeProperty build() {
                return new Jsii$Proxy(execCommand, failureThreshold, httpGetPath, httpGetPort, httpGetScheme, initialDelaySeconds, periodSeconds, successThreshold, tcpSocketPort, timeoutSeconds);
            }
        }

        /**
         * An implementation for {@link ReadinessProbeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadinessProbeProperty {
            private final java.util.List<java.lang.String> execCommand;
            private final java.lang.Number failureThreshold;
            private final java.lang.String httpGetPath;
            private final java.lang.Number httpGetPort;
            private final java.lang.String httpGetScheme;
            private final java.lang.Number initialDelaySeconds;
            private final java.lang.Number periodSeconds;
            private final java.lang.Number successThreshold;
            private final java.lang.Number tcpSocketPort;
            private final java.lang.Number timeoutSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.execCommand = software.amazon.jsii.Kernel.get(this, "execCommand", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.failureThreshold = software.amazon.jsii.Kernel.get(this, "failureThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.httpGetPath = software.amazon.jsii.Kernel.get(this, "httpGetPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.httpGetPort = software.amazon.jsii.Kernel.get(this, "httpGetPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.httpGetScheme = software.amazon.jsii.Kernel.get(this, "httpGetScheme", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.initialDelaySeconds = software.amazon.jsii.Kernel.get(this, "initialDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.periodSeconds = software.amazon.jsii.Kernel.get(this, "periodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.successThreshold = software.amazon.jsii.Kernel.get(this, "successThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.tcpSocketPort = software.amazon.jsii.Kernel.get(this, "tcpSocketPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.timeoutSeconds = software.amazon.jsii.Kernel.get(this, "timeoutSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.util.List<java.lang.String> execCommand, final java.lang.Number failureThreshold, final java.lang.String httpGetPath, final java.lang.Number httpGetPort, final java.lang.String httpGetScheme, final java.lang.Number initialDelaySeconds, final java.lang.Number periodSeconds, final java.lang.Number successThreshold, final java.lang.Number tcpSocketPort, final java.lang.Number timeoutSeconds) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.execCommand = execCommand;
                this.failureThreshold = failureThreshold;
                this.httpGetPath = httpGetPath;
                this.httpGetPort = httpGetPort;
                this.httpGetScheme = httpGetScheme;
                this.initialDelaySeconds = initialDelaySeconds;
                this.periodSeconds = periodSeconds;
                this.successThreshold = successThreshold;
                this.tcpSocketPort = tcpSocketPort;
                this.timeoutSeconds = timeoutSeconds;
            }

            @Override
            public final java.util.List<java.lang.String> getExecCommand() {
                return this.execCommand;
            }

            @Override
            public final java.lang.Number getFailureThreshold() {
                return this.failureThreshold;
            }

            @Override
            public final java.lang.String getHttpGetPath() {
                return this.httpGetPath;
            }

            @Override
            public final java.lang.Number getHttpGetPort() {
                return this.httpGetPort;
            }

            @Override
            public final java.lang.String getHttpGetScheme() {
                return this.httpGetScheme;
            }

            @Override
            public final java.lang.Number getInitialDelaySeconds() {
                return this.initialDelaySeconds;
            }

            @Override
            public final java.lang.Number getPeriodSeconds() {
                return this.periodSeconds;
            }

            @Override
            public final java.lang.Number getSuccessThreshold() {
                return this.successThreshold;
            }

            @Override
            public final java.lang.Number getTcpSocketPort() {
                return this.tcpSocketPort;
            }

            @Override
            public final java.lang.Number getTimeoutSeconds() {
                return this.timeoutSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExecCommand() != null) {
                    data.set("execCommand", om.valueToTree(this.getExecCommand()));
                }
                if (this.getFailureThreshold() != null) {
                    data.set("failureThreshold", om.valueToTree(this.getFailureThreshold()));
                }
                if (this.getHttpGetPath() != null) {
                    data.set("httpGetPath", om.valueToTree(this.getHttpGetPath()));
                }
                if (this.getHttpGetPort() != null) {
                    data.set("httpGetPort", om.valueToTree(this.getHttpGetPort()));
                }
                if (this.getHttpGetScheme() != null) {
                    data.set("httpGetScheme", om.valueToTree(this.getHttpGetScheme()));
                }
                if (this.getInitialDelaySeconds() != null) {
                    data.set("initialDelaySeconds", om.valueToTree(this.getInitialDelaySeconds()));
                }
                if (this.getPeriodSeconds() != null) {
                    data.set("periodSeconds", om.valueToTree(this.getPeriodSeconds()));
                }
                if (this.getSuccessThreshold() != null) {
                    data.set("successThreshold", om.valueToTree(this.getSuccessThreshold()));
                }
                if (this.getTcpSocketPort() != null) {
                    data.set("tcpSocketPort", om.valueToTree(this.getTcpSocketPort()));
                }
                if (this.getTimeoutSeconds() != null) {
                    data.set("timeoutSeconds", om.valueToTree(this.getTimeoutSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReadinessProbeProperty.Jsii$Proxy that = (ReadinessProbeProperty.Jsii$Proxy) o;

                if (this.execCommand != null ? !this.execCommand.equals(that.execCommand) : that.execCommand != null) return false;
                if (this.failureThreshold != null ? !this.failureThreshold.equals(that.failureThreshold) : that.failureThreshold != null) return false;
                if (this.httpGetPath != null ? !this.httpGetPath.equals(that.httpGetPath) : that.httpGetPath != null) return false;
                if (this.httpGetPort != null ? !this.httpGetPort.equals(that.httpGetPort) : that.httpGetPort != null) return false;
                if (this.httpGetScheme != null ? !this.httpGetScheme.equals(that.httpGetScheme) : that.httpGetScheme != null) return false;
                if (this.initialDelaySeconds != null ? !this.initialDelaySeconds.equals(that.initialDelaySeconds) : that.initialDelaySeconds != null) return false;
                if (this.periodSeconds != null ? !this.periodSeconds.equals(that.periodSeconds) : that.periodSeconds != null) return false;
                if (this.successThreshold != null ? !this.successThreshold.equals(that.successThreshold) : that.successThreshold != null) return false;
                if (this.tcpSocketPort != null ? !this.tcpSocketPort.equals(that.tcpSocketPort) : that.tcpSocketPort != null) return false;
                return this.timeoutSeconds != null ? this.timeoutSeconds.equals(that.timeoutSeconds) : that.timeoutSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.execCommand != null ? this.execCommand.hashCode() : 0;
                result = 31 * result + (this.failureThreshold != null ? this.failureThreshold.hashCode() : 0);
                result = 31 * result + (this.httpGetPath != null ? this.httpGetPath.hashCode() : 0);
                result = 31 * result + (this.httpGetPort != null ? this.httpGetPort.hashCode() : 0);
                result = 31 * result + (this.httpGetScheme != null ? this.httpGetScheme.hashCode() : 0);
                result = 31 * result + (this.initialDelaySeconds != null ? this.initialDelaySeconds.hashCode() : 0);
                result = 31 * result + (this.periodSeconds != null ? this.periodSeconds.hashCode() : 0);
                result = 31 * result + (this.successThreshold != null ? this.successThreshold.hashCode() : 0);
                result = 31 * result + (this.tcpSocketPort != null ? this.tcpSocketPort.hashCode() : 0);
                result = 31 * result + (this.timeoutSeconds != null ? this.timeoutSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty")
    @software.amazon.jsii.Jsii.Proxy(SecurityContextProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecurityContextProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getCapabilityAdd() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadOnlyRootFilesystem() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getRunAsUser() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecurityContextProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecurityContextProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecurityContextProperty> {
            private java.util.List<java.lang.String> capabilityAdd;
            private java.lang.Object readOnlyRootFilesystem;
            private java.lang.Number runAsUser;

            /**
             * Sets the value of {@link SecurityContextProperty#getCapabilityAdd}
             * @param capabilityAdd the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder capabilityAdd(java.util.List<java.lang.String> capabilityAdd) {
                this.capabilityAdd = capabilityAdd;
                return this;
            }

            /**
             * Sets the value of {@link SecurityContextProperty#getReadOnlyRootFilesystem}
             * @param readOnlyRootFilesystem the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnlyRootFilesystem(java.lang.Boolean readOnlyRootFilesystem) {
                this.readOnlyRootFilesystem = readOnlyRootFilesystem;
                return this;
            }

            /**
             * Sets the value of {@link SecurityContextProperty#getReadOnlyRootFilesystem}
             * @param readOnlyRootFilesystem the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnlyRootFilesystem(com.aliyun.ros.cdk.core.IResolvable readOnlyRootFilesystem) {
                this.readOnlyRootFilesystem = readOnlyRootFilesystem;
                return this;
            }

            /**
             * Sets the value of {@link SecurityContextProperty#getRunAsUser}
             * @param runAsUser the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runAsUser(java.lang.Number runAsUser) {
                this.runAsUser = runAsUser;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecurityContextProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecurityContextProperty build() {
                return new Jsii$Proxy(capabilityAdd, readOnlyRootFilesystem, runAsUser);
            }
        }

        /**
         * An implementation for {@link SecurityContextProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityContextProperty {
            private final java.util.List<java.lang.String> capabilityAdd;
            private final java.lang.Object readOnlyRootFilesystem;
            private final java.lang.Number runAsUser;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.capabilityAdd = software.amazon.jsii.Kernel.get(this, "capabilityAdd", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.readOnlyRootFilesystem = software.amazon.jsii.Kernel.get(this, "readOnlyRootFilesystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.runAsUser = software.amazon.jsii.Kernel.get(this, "runAsUser", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.util.List<java.lang.String> capabilityAdd, final java.lang.Object readOnlyRootFilesystem, final java.lang.Number runAsUser) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.capabilityAdd = capabilityAdd;
                this.readOnlyRootFilesystem = readOnlyRootFilesystem;
                this.runAsUser = runAsUser;
            }

            @Override
            public final java.util.List<java.lang.String> getCapabilityAdd() {
                return this.capabilityAdd;
            }

            @Override
            public final java.lang.Object getReadOnlyRootFilesystem() {
                return this.readOnlyRootFilesystem;
            }

            @Override
            public final java.lang.Number getRunAsUser() {
                return this.runAsUser;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCapabilityAdd() != null) {
                    data.set("capabilityAdd", om.valueToTree(this.getCapabilityAdd()));
                }
                if (this.getReadOnlyRootFilesystem() != null) {
                    data.set("readOnlyRootFilesystem", om.valueToTree(this.getReadOnlyRootFilesystem()));
                }
                if (this.getRunAsUser() != null) {
                    data.set("runAsUser", om.valueToTree(this.getRunAsUser()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecurityContextProperty.Jsii$Proxy that = (SecurityContextProperty.Jsii$Proxy) o;

                if (this.capabilityAdd != null ? !this.capabilityAdd.equals(that.capabilityAdd) : that.capabilityAdd != null) return false;
                if (this.readOnlyRootFilesystem != null ? !this.readOnlyRootFilesystem.equals(that.readOnlyRootFilesystem) : that.readOnlyRootFilesystem != null) return false;
                return this.runAsUser != null ? this.runAsUser.equals(that.runAsUser) : that.runAsUser == null;
            }

            @Override
            public final int hashCode() {
                int result = this.capabilityAdd != null ? this.capabilityAdd.hashCode() : 0;
                result = 31 * result + (this.readOnlyRootFilesystem != null ? this.readOnlyRootFilesystem.hashCode() : 0);
                result = 31 * result + (this.runAsUser != null ? this.runAsUser.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty")
    @software.amazon.jsii.Jsii.Proxy(SecurityContextSysctlProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecurityContextSysctlProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecurityContextSysctlProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecurityContextSysctlProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecurityContextSysctlProperty> {
            private java.lang.String name;
            private java.lang.String value;

            /**
             * Sets the value of {@link SecurityContextSysctlProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SecurityContextSysctlProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecurityContextSysctlProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecurityContextSysctlProperty build() {
                return new Jsii$Proxy(name, value);
            }
        }

        /**
         * An implementation for {@link SecurityContextSysctlProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityContextSysctlProperty {
            private final java.lang.String name;
            private final java.lang.String value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String name, final java.lang.String value) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = name;
                this.value = value;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.lang.String getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecurityContextSysctlProperty.Jsii$Proxy that = (SecurityContextSysctlProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.TagProperty")
    @software.amazon.jsii.Jsii.Proxy(TagProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagProperty> {
            private java.lang.String key;
            private java.lang.String value;

            /**
             * Sets the value of {@link TagProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagProperty build() {
                return new Jsii$Proxy(key, value);
            }
        }

        /**
         * An implementation for {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagProperty {
            private final java.lang.String key;
            private final java.lang.String value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String key, final java.lang.String value) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(key, "key is required");
                this.value = value;
            }

            @Override
            public final java.lang.String getKey() {
                return this.key;
            }

            @Override
            public final java.lang.String getValue() {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.TagProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagProperty.Jsii$Proxy that = (TagProperty.Jsii$Proxy) o;

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
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty")
    @software.amazon.jsii.Jsii.Proxy(VolumeMountProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VolumeMountProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getMountPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadOnly() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VolumeMountProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VolumeMountProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VolumeMountProperty> {
            private java.lang.String mountPath;
            private java.lang.String name;
            private java.lang.Object readOnly;

            /**
             * Sets the value of {@link VolumeMountProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(java.lang.String mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(java.lang.Boolean readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(com.aliyun.ros.cdk.core.IResolvable readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VolumeMountProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VolumeMountProperty build() {
                return new Jsii$Proxy(mountPath, name, readOnly);
            }
        }

        /**
         * An implementation for {@link VolumeMountProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VolumeMountProperty {
            private final java.lang.String mountPath;
            private final java.lang.String name;
            private final java.lang.Object readOnly;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.readOnly = software.amazon.jsii.Kernel.get(this, "readOnly", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String mountPath, final java.lang.String name, final java.lang.Object readOnly) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mountPath = mountPath;
                this.name = name;
                this.readOnly = readOnly;
            }

            @Override
            public final java.lang.String getMountPath() {
                return this.mountPath;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getReadOnly() {
                return this.readOnly;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMountPath() != null) {
                    data.set("mountPath", om.valueToTree(this.getMountPath()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getReadOnly() != null) {
                    data.set("readOnly", om.valueToTree(this.getReadOnly()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VolumeMountProperty.Jsii$Proxy that = (VolumeMountProperty.Jsii$Proxy) o;

                if (this.mountPath != null ? !this.mountPath.equals(that.mountPath) : that.mountPath != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.readOnly != null ? this.readOnly.equals(that.readOnly) : that.readOnly == null;
            }

            @Override
            public final int hashCode() {
                int result = this.mountPath != null ? this.mountPath.hashCode() : 0;
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.readOnly != null ? this.readOnly.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty")
    @software.amazon.jsii.Jsii.Proxy(VolumeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VolumeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigFileVolumeConfigFileToPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getEmptyDirVolumeMedium() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNfsVolumePath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNfsVolumeReadOnly() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNfsVolumeServer() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VolumeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VolumeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VolumeProperty> {
            private java.lang.String name;
            private java.lang.String type;
            private java.lang.Object configFileVolumeConfigFileToPath;
            private java.lang.String emptyDirVolumeMedium;
            private java.lang.String nfsVolumePath;
            private java.lang.Object nfsVolumeReadOnly;
            private java.lang.String nfsVolumeServer;

            /**
             * Sets the value of {@link VolumeProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getConfigFileVolumeConfigFileToPath}
             * @param configFileVolumeConfigFileToPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileVolumeConfigFileToPath(com.aliyun.ros.cdk.core.IResolvable configFileVolumeConfigFileToPath) {
                this.configFileVolumeConfigFileToPath = configFileVolumeConfigFileToPath;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getConfigFileVolumeConfigFileToPath}
             * @param configFileVolumeConfigFileToPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileVolumeConfigFileToPath(java.util.List<? extends java.lang.Object> configFileVolumeConfigFileToPath) {
                this.configFileVolumeConfigFileToPath = configFileVolumeConfigFileToPath;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getEmptyDirVolumeMedium}
             * @param emptyDirVolumeMedium the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emptyDirVolumeMedium(java.lang.String emptyDirVolumeMedium) {
                this.emptyDirVolumeMedium = emptyDirVolumeMedium;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getNfsVolumePath}
             * @param nfsVolumePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumePath(java.lang.String nfsVolumePath) {
                this.nfsVolumePath = nfsVolumePath;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getNfsVolumeReadOnly}
             * @param nfsVolumeReadOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumeReadOnly(java.lang.Boolean nfsVolumeReadOnly) {
                this.nfsVolumeReadOnly = nfsVolumeReadOnly;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getNfsVolumeReadOnly}
             * @param nfsVolumeReadOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumeReadOnly(com.aliyun.ros.cdk.core.IResolvable nfsVolumeReadOnly) {
                this.nfsVolumeReadOnly = nfsVolumeReadOnly;
                return this;
            }

            /**
             * Sets the value of {@link VolumeProperty#getNfsVolumeServer}
             * @param nfsVolumeServer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumeServer(java.lang.String nfsVolumeServer) {
                this.nfsVolumeServer = nfsVolumeServer;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VolumeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VolumeProperty build() {
                return new Jsii$Proxy(name, type, configFileVolumeConfigFileToPath, emptyDirVolumeMedium, nfsVolumePath, nfsVolumeReadOnly, nfsVolumeServer);
            }
        }

        /**
         * An implementation for {@link VolumeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VolumeProperty {
            private final java.lang.String name;
            private final java.lang.String type;
            private final java.lang.Object configFileVolumeConfigFileToPath;
            private final java.lang.String emptyDirVolumeMedium;
            private final java.lang.String nfsVolumePath;
            private final java.lang.Object nfsVolumeReadOnly;
            private final java.lang.String nfsVolumeServer;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.configFileVolumeConfigFileToPath = software.amazon.jsii.Kernel.get(this, "configFileVolumeConfigFileToPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.emptyDirVolumeMedium = software.amazon.jsii.Kernel.get(this, "emptyDirVolumeMedium", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.nfsVolumePath = software.amazon.jsii.Kernel.get(this, "nfsVolumePath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.nfsVolumeReadOnly = software.amazon.jsii.Kernel.get(this, "nfsVolumeReadOnly", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nfsVolumeServer = software.amazon.jsii.Kernel.get(this, "nfsVolumeServer", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String name, final java.lang.String type, final java.lang.Object configFileVolumeConfigFileToPath, final java.lang.String emptyDirVolumeMedium, final java.lang.String nfsVolumePath, final java.lang.Object nfsVolumeReadOnly, final java.lang.String nfsVolumeServer) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(name, "name is required");
                this.type = java.util.Objects.requireNonNull(type, "type is required");
                this.configFileVolumeConfigFileToPath = configFileVolumeConfigFileToPath;
                this.emptyDirVolumeMedium = emptyDirVolumeMedium;
                this.nfsVolumePath = nfsVolumePath;
                this.nfsVolumeReadOnly = nfsVolumeReadOnly;
                this.nfsVolumeServer = nfsVolumeServer;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.lang.String getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getConfigFileVolumeConfigFileToPath() {
                return this.configFileVolumeConfigFileToPath;
            }

            @Override
            public final java.lang.String getEmptyDirVolumeMedium() {
                return this.emptyDirVolumeMedium;
            }

            @Override
            public final java.lang.String getNfsVolumePath() {
                return this.nfsVolumePath;
            }

            @Override
            public final java.lang.Object getNfsVolumeReadOnly() {
                return this.nfsVolumeReadOnly;
            }

            @Override
            public final java.lang.String getNfsVolumeServer() {
                return this.nfsVolumeServer;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getConfigFileVolumeConfigFileToPath() != null) {
                    data.set("configFileVolumeConfigFileToPath", om.valueToTree(this.getConfigFileVolumeConfigFileToPath()));
                }
                if (this.getEmptyDirVolumeMedium() != null) {
                    data.set("emptyDirVolumeMedium", om.valueToTree(this.getEmptyDirVolumeMedium()));
                }
                if (this.getNfsVolumePath() != null) {
                    data.set("nfsVolumePath", om.valueToTree(this.getNfsVolumePath()));
                }
                if (this.getNfsVolumeReadOnly() != null) {
                    data.set("nfsVolumeReadOnly", om.valueToTree(this.getNfsVolumeReadOnly()));
                }
                if (this.getNfsVolumeServer() != null) {
                    data.set("nfsVolumeServer", om.valueToTree(this.getNfsVolumeServer()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VolumeProperty.Jsii$Proxy that = (VolumeProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (!type.equals(that.type)) return false;
                if (this.configFileVolumeConfigFileToPath != null ? !this.configFileVolumeConfigFileToPath.equals(that.configFileVolumeConfigFileToPath) : that.configFileVolumeConfigFileToPath != null) return false;
                if (this.emptyDirVolumeMedium != null ? !this.emptyDirVolumeMedium.equals(that.emptyDirVolumeMedium) : that.emptyDirVolumeMedium != null) return false;
                if (this.nfsVolumePath != null ? !this.nfsVolumePath.equals(that.nfsVolumePath) : that.nfsVolumePath != null) return false;
                if (this.nfsVolumeReadOnly != null ? !this.nfsVolumeReadOnly.equals(that.nfsVolumeReadOnly) : that.nfsVolumeReadOnly != null) return false;
                return this.nfsVolumeServer != null ? this.nfsVolumeServer.equals(that.nfsVolumeServer) : that.nfsVolumeServer == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.configFileVolumeConfigFileToPath != null ? this.configFileVolumeConfigFileToPath.hashCode() : 0);
                result = 31 * result + (this.emptyDirVolumeMedium != null ? this.emptyDirVolumeMedium.hashCode() : 0);
                result = 31 * result + (this.nfsVolumePath != null ? this.nfsVolumePath.hashCode() : 0);
                result = 31 * result + (this.nfsVolumeReadOnly != null ? this.nfsVolumeReadOnly.hashCode() : 0);
                result = 31 * result + (this.nfsVolumeServer != null ? this.nfsVolumeServer.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eci.RosContainerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eci.RosContainerGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.eci.RosContainerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eci.RosContainerGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param container This parameter is required.
         */
        public Builder container(final com.aliyun.ros.cdk.core.IResolvable container) {
            this.props.container(container);
            return this;
        }
        /**
         * @return {@code this}
         * @param container This parameter is required.
         */
        public Builder container(final java.util.List<? extends java.lang.Object> container) {
            this.props.container(container);
            return this;
        }

        /**
         * @return {@code this}
         * @param containerGroupName This parameter is required.
         */
        public Builder containerGroupName(final java.lang.String containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param activeDeadlineSeconds This parameter is required.
         */
        public Builder activeDeadlineSeconds(final java.lang.Number activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final java.lang.Boolean autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param dnsConfig This parameter is required.
         */
        public Builder dnsConfig(final com.aliyun.ros.cdk.core.IResolvable dnsConfig) {
            this.props.dnsConfig(dnsConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsConfig This parameter is required.
         */
        public Builder dnsConfig(final com.aliyun.ros.cdk.eci.RosContainerGroup.DnsConfigProperty dnsConfig) {
            this.props.dnsConfig(dnsConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param eipInstanceId This parameter is required.
         */
        public Builder eipInstanceId(final java.lang.String eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostAliase This parameter is required.
         */
        public Builder hostAliase(final com.aliyun.ros.cdk.core.IResolvable hostAliase) {
            this.props.hostAliase(hostAliase);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostAliase This parameter is required.
         */
        public Builder hostAliase(final java.util.List<? extends java.lang.Object> hostAliase) {
            this.props.hostAliase(hostAliase);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageSnapshotId This parameter is required.
         */
        public Builder imageSnapshotId(final java.lang.String imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }

        /**
         * @return {@code this}
         * @param initContainer This parameter is required.
         */
        public Builder initContainer(final com.aliyun.ros.cdk.core.IResolvable initContainer) {
            this.props.initContainer(initContainer);
            return this;
        }
        /**
         * @return {@code this}
         * @param initContainer This parameter is required.
         */
        public Builder initContainer(final java.util.List<? extends java.lang.Object> initContainer) {
            this.props.initContainer(initContainer);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6AddressCount This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param restartPolicy This parameter is required.
         */
        public Builder restartPolicy(final java.lang.String restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityContextSysctl This parameter is required.
         */
        public Builder securityContextSysctl(final com.aliyun.ros.cdk.core.IResolvable securityContextSysctl) {
            this.props.securityContextSysctl(securityContextSysctl);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityContextSysctl This parameter is required.
         */
        public Builder securityContextSysctl(final java.util.List<? extends java.lang.Object> securityContextSysctl) {
            this.props.securityContextSysctl(securityContextSysctl);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsEnable This parameter is required.
         */
        public Builder slsEnable(final java.lang.Boolean slsEnable) {
            this.props.slsEnable(slsEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsEnable This parameter is required.
         */
        public Builder slsEnable(final com.aliyun.ros.cdk.core.IResolvable slsEnable) {
            this.props.slsEnable(slsEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param tag This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * @return {@code this}
         * @param tag This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminationGracePeriodSeconds This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final java.lang.Number terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param volume This parameter is required.
         */
        public Builder volume(final com.aliyun.ros.cdk.core.IResolvable volume) {
            this.props.volume(volume);
            return this;
        }
        /**
         * @return {@code this}
         * @param volume This parameter is required.
         */
        public Builder volume(final java.util.List<? extends java.lang.Object> volume) {
            this.props.volume(volume);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.eci.RosContainerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.eci.RosContainerGroup build() {
            return new com.aliyun.ros.cdk.eci.RosContainerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
