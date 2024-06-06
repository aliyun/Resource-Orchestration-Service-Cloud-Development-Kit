package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::FullNatEntry</code>, which is used to add a FULLNAT entry to a FULLNAT table.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:17.806Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.FullNatEntry")
public class FullNatEntry extends com.aliyun.ros.cdk.core.Resource {

    protected FullNatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FullNatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public FullNatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.FullNatEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public FullNatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.FullNatEntryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FullNatEntryId: The FULLNAT entry ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFullNatEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrFullNatEntryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.FullNatEntryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.FullNatEntryProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.FullNatEntryProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.FullNatEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.FullNatEntry> {
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
        private final com.aliyun.ros.cdk.vpc.FullNatEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.FullNatEntryProps.Builder();
        }

        /**
         * Property accessIp: The backend IP address to be modified in FULLNAT address translation.
         * <p>
         * @return {@code this}
         * @param accessIp Property accessIp: The backend IP address to be modified in FULLNAT address translation. This parameter is required.
         */
        public Builder accessIp(final java.lang.String accessIp) {
            this.props.accessIp(accessIp);
            return this;
        }
        /**
         * Property accessIp: The backend IP address to be modified in FULLNAT address translation.
         * <p>
         * @return {@code this}
         * @param accessIp Property accessIp: The backend IP address to be modified in FULLNAT address translation. This parameter is required.
         */
        public Builder accessIp(final com.aliyun.ros.cdk.core.IResolvable accessIp) {
            this.props.accessIp(accessIp);
            return this;
        }

        /**
         * Property accessPort: The backend port to be modified in the mapping of FULLNAT port.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param accessPort Property accessPort: The backend port to be modified in the mapping of FULLNAT port. This parameter is required.
         */
        public Builder accessPort(final java.lang.String accessPort) {
            this.props.accessPort(accessPort);
            return this;
        }
        /**
         * Property accessPort: The backend port to be modified in the mapping of FULLNAT port.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param accessPort Property accessPort: The backend port to be modified in the mapping of FULLNAT port. This parameter is required.
         */
        public Builder accessPort(final com.aliyun.ros.cdk.core.IResolvable accessPort) {
            this.props.accessPort(accessPort);
            return this;
        }

        /**
         * Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
         * <p>
         * @return {@code this}
         * @param fullNatTableId Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs. This parameter is required.
         */
        public Builder fullNatTableId(final java.lang.String fullNatTableId) {
            this.props.fullNatTableId(fullNatTableId);
            return this;
        }
        /**
         * Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
         * <p>
         * @return {@code this}
         * @param fullNatTableId Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs. This parameter is required.
         */
        public Builder fullNatTableId(final com.aliyun.ros.cdk.core.IResolvable fullNatTableId) {
            this.props.fullNatTableId(fullNatTableId);
            return this;
        }

        /**
         * Property ipProtocol: The protocol of the packets that are forwarded by the port.
         * <p>
         * Valid values:
         * TCP
         * UDP
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: The protocol of the packets that are forwarded by the port. This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }
        /**
         * Property ipProtocol: The protocol of the packets that are forwarded by the port.
         * <p>
         * Valid values:
         * TCP
         * UDP
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: The protocol of the packets that are forwarded by the port. This parameter is required.
         */
        public Builder ipProtocol(final com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * Property natIp: The NAT IP address that provides address translation.
         * <p>
         * @return {@code this}
         * @param natIp Property natIp: The NAT IP address that provides address translation. This parameter is required.
         */
        public Builder natIp(final java.lang.String natIp) {
            this.props.natIp(natIp);
            return this;
        }
        /**
         * Property natIp: The NAT IP address that provides address translation.
         * <p>
         * @return {@code this}
         * @param natIp Property natIp: The NAT IP address that provides address translation. This parameter is required.
         */
        public Builder natIp(final com.aliyun.ros.cdk.core.IResolvable natIp) {
            this.props.natIp(natIp);
            return this;
        }

        /**
         * Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param natIpPort Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port. This parameter is required.
         */
        public Builder natIpPort(final java.lang.String natIpPort) {
            this.props.natIpPort(natIpPort);
            return this;
        }
        /**
         * Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param natIpPort Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port. This parameter is required.
         */
        public Builder natIpPort(final com.aliyun.ros.cdk.core.IResolvable natIpPort) {
            this.props.natIpPort(natIpPort);
            return this;
        }

        /**
         * Property networkInterfaceId: The elastic network interface (ENI) ID.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: The elastic network interface (ENI) ID. This parameter is required.
         */
        public Builder networkInterfaceId(final java.lang.String networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }
        /**
         * Property networkInterfaceId: The elastic network interface (ENI) ID.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: The elastic network interface (ENI) ID. This parameter is required.
         */
        public Builder networkInterfaceId(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }

        /**
         * Property fullNatEntryDescription: The description of the FULLNAT entry.
         * <p>
         * This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param fullNatEntryDescription Property fullNatEntryDescription: The description of the FULLNAT entry. This parameter is required.
         */
        public Builder fullNatEntryDescription(final java.lang.String fullNatEntryDescription) {
            this.props.fullNatEntryDescription(fullNatEntryDescription);
            return this;
        }
        /**
         * Property fullNatEntryDescription: The description of the FULLNAT entry.
         * <p>
         * This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param fullNatEntryDescription Property fullNatEntryDescription: The description of the FULLNAT entry. This parameter is required.
         */
        public Builder fullNatEntryDescription(final com.aliyun.ros.cdk.core.IResolvable fullNatEntryDescription) {
            this.props.fullNatEntryDescription(fullNatEntryDescription);
            return this;
        }

        /**
         * Property fullNatEntryName: The FULLNAT entry name.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param fullNatEntryName Property fullNatEntryName: The FULLNAT entry name. This parameter is required.
         */
        public Builder fullNatEntryName(final java.lang.String fullNatEntryName) {
            this.props.fullNatEntryName(fullNatEntryName);
            return this;
        }
        /**
         * Property fullNatEntryName: The FULLNAT entry name.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param fullNatEntryName Property fullNatEntryName: The FULLNAT entry name. This parameter is required.
         */
        public Builder fullNatEntryName(final com.aliyun.ros.cdk.core.IResolvable fullNatEntryName) {
            this.props.fullNatEntryName(fullNatEntryName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.FullNatEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.FullNatEntry build() {
            return new com.aliyun.ros.cdk.vpc.FullNatEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
