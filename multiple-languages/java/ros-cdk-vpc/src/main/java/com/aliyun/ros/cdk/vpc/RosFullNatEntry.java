package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::FullNatEntry</code>, which is used to add a FULLNAT entry to a FULLNAT table.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.850Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosFullNatEntry")
public class RosFullNatEntry extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFullNatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFullNatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosFullNatEntry.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFullNatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosFullNatEntryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFullNatEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrFullNatEntryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccessIp() {
        return software.amazon.jsii.Kernel.get(this, "accessIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessIp", java.util.Objects.requireNonNull(value, "accessIp is required"));
    }

    /**
     */
    public void setAccessIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessIp", java.util.Objects.requireNonNull(value, "accessIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccessPort() {
        return software.amazon.jsii.Kernel.get(this, "accessPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessPort(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessPort", java.util.Objects.requireNonNull(value, "accessPort is required"));
    }

    /**
     */
    public void setAccessPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessPort", java.util.Objects.requireNonNull(value, "accessPort is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFullNatTableId() {
        return software.amazon.jsii.Kernel.get(this, "fullNatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFullNatTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fullNatTableId", java.util.Objects.requireNonNull(value, "fullNatTableId is required"));
    }

    /**
     */
    public void setFullNatTableId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fullNatTableId", java.util.Objects.requireNonNull(value, "fullNatTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol() {
        return software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipProtocol", java.util.Objects.requireNonNull(value, "ipProtocol is required"));
    }

    /**
     */
    public void setIpProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipProtocol", java.util.Objects.requireNonNull(value, "ipProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatIp() {
        return software.amazon.jsii.Kernel.get(this, "natIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIp", java.util.Objects.requireNonNull(value, "natIp is required"));
    }

    /**
     */
    public void setNatIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIp", java.util.Objects.requireNonNull(value, "natIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatIpPort() {
        return software.amazon.jsii.Kernel.get(this, "natIpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIpPort(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIpPort", java.util.Objects.requireNonNull(value, "natIpPort is required"));
    }

    /**
     */
    public void setNatIpPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIpPort", java.util.Objects.requireNonNull(value, "natIpPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkInterfaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkInterfaceId", java.util.Objects.requireNonNull(value, "networkInterfaceId is required"));
    }

    /**
     */
    public void setNetworkInterfaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkInterfaceId", java.util.Objects.requireNonNull(value, "networkInterfaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFullNatEntryDescription() {
        return software.amazon.jsii.Kernel.get(this, "fullNatEntryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFullNatEntryDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fullNatEntryDescription", value);
    }

    /**
     */
    public void setFullNatEntryDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fullNatEntryDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFullNatEntryName() {
        return software.amazon.jsii.Kernel.get(this, "fullNatEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFullNatEntryName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fullNatEntryName", value);
    }

    /**
     */
    public void setFullNatEntryName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fullNatEntryName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosFullNatEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosFullNatEntry> {
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
        private final com.aliyun.ros.cdk.vpc.RosFullNatEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosFullNatEntryProps.Builder();
        }

        /**
         * @return {@code this}
         * @param accessIp This parameter is required.
         */
        public Builder accessIp(final java.lang.String accessIp) {
            this.props.accessIp(accessIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessIp This parameter is required.
         */
        public Builder accessIp(final com.aliyun.ros.cdk.core.IResolvable accessIp) {
            this.props.accessIp(accessIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessPort This parameter is required.
         */
        public Builder accessPort(final java.lang.String accessPort) {
            this.props.accessPort(accessPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessPort This parameter is required.
         */
        public Builder accessPort(final com.aliyun.ros.cdk.core.IResolvable accessPort) {
            this.props.accessPort(accessPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param fullNatTableId This parameter is required.
         */
        public Builder fullNatTableId(final java.lang.String fullNatTableId) {
            this.props.fullNatTableId(fullNatTableId);
            return this;
        }
        /**
         * @return {@code this}
         * @param fullNatTableId This parameter is required.
         */
        public Builder fullNatTableId(final com.aliyun.ros.cdk.core.IResolvable fullNatTableId) {
            this.props.fullNatTableId(fullNatTableId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipProtocol This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipProtocol This parameter is required.
         */
        public Builder ipProtocol(final com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIp This parameter is required.
         */
        public Builder natIp(final java.lang.String natIp) {
            this.props.natIp(natIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIp This parameter is required.
         */
        public Builder natIp(final com.aliyun.ros.cdk.core.IResolvable natIp) {
            this.props.natIp(natIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIpPort This parameter is required.
         */
        public Builder natIpPort(final java.lang.String natIpPort) {
            this.props.natIpPort(natIpPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIpPort This parameter is required.
         */
        public Builder natIpPort(final com.aliyun.ros.cdk.core.IResolvable natIpPort) {
            this.props.natIpPort(natIpPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkInterfaceId This parameter is required.
         */
        public Builder networkInterfaceId(final java.lang.String networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkInterfaceId This parameter is required.
         */
        public Builder networkInterfaceId(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param fullNatEntryDescription This parameter is required.
         */
        public Builder fullNatEntryDescription(final java.lang.String fullNatEntryDescription) {
            this.props.fullNatEntryDescription(fullNatEntryDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param fullNatEntryDescription This parameter is required.
         */
        public Builder fullNatEntryDescription(final com.aliyun.ros.cdk.core.IResolvable fullNatEntryDescription) {
            this.props.fullNatEntryDescription(fullNatEntryDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param fullNatEntryName This parameter is required.
         */
        public Builder fullNatEntryName(final java.lang.String fullNatEntryName) {
            this.props.fullNatEntryName(fullNatEntryName);
            return this;
        }
        /**
         * @return {@code this}
         * @param fullNatEntryName This parameter is required.
         */
        public Builder fullNatEntryName(final com.aliyun.ros.cdk.core.IResolvable fullNatEntryName) {
            this.props.fullNatEntryName(fullNatEntryName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosFullNatEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosFullNatEntry build() {
            return new com.aliyun.ros.cdk.vpc.RosFullNatEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
