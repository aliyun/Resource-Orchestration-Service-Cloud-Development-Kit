package com.aliyun.ros.cdk.bastionhost;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BastionHost::Host</code>, which is used to create a host for O&amp;M in a bastion host.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.731Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.Host")
public class Host extends com.aliyun.ros.cdk.core.Resource {

    protected Host(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Host(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Host(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.HostProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Host(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.HostProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HostId: The ID of the host that was created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostId() {
        return software.amazon.jsii.Kernel.get(this, "attrHostId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.HostProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bastionhost.HostProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.HostProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bastionhost.Host}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bastionhost.Host> {
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
        private final com.aliyun.ros.cdk.bastionhost.HostProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bastionhost.HostProps.Builder();
        }

        /**
         * Property activeAddressType: The endpoint type of the host that you want to create.
         * <p>
         * Valid values:
         * Public: a public endpoint
         * Private: an internal endpoint
         * <p>
         * @return {@code this}
         * @param activeAddressType Property activeAddressType: The endpoint type of the host that you want to create. This parameter is required.
         */
        public Builder activeAddressType(final java.lang.String activeAddressType) {
            this.props.activeAddressType(activeAddressType);
            return this;
        }
        /**
         * Property activeAddressType: The endpoint type of the host that you want to create.
         * <p>
         * Valid values:
         * Public: a public endpoint
         * Private: an internal endpoint
         * <p>
         * @return {@code this}
         * @param activeAddressType Property activeAddressType: The endpoint type of the host that you want to create. This parameter is required.
         */
        public Builder activeAddressType(final com.aliyun.ros.cdk.core.IResolvable activeAddressType) {
            this.props.activeAddressType(activeAddressType);
            return this;
        }

        /**
         * Property hostName: The name of the host that you want to create.
         * <p>
         * The name can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The name of the host that you want to create. This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * Property hostName: The name of the host that you want to create.
         * <p>
         * The name can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The name of the host that you want to create. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * Property instanceId: The ID of the Bastionhost instance where you want to create the host.
         * <p>
         * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Bastionhost instance where you want to create the host. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the Bastionhost instance where you want to create the host.
         * <p>
         * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Bastionhost instance where you want to create the host. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property osType: The operating system of the host that you want to create.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Linux</li>
         * <li>Windows</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param osType Property osType: The operating system of the host that you want to create. This parameter is required.
         */
        public Builder osType(final java.lang.String osType) {
            this.props.osType(osType);
            return this;
        }
        /**
         * Property osType: The operating system of the host that you want to create.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Linux</li>
         * <li>Windows</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param osType Property osType: The operating system of the host that you want to create. This parameter is required.
         */
        public Builder osType(final com.aliyun.ros.cdk.core.IResolvable osType) {
            this.props.osType(osType);
            return this;
        }

        /**
         * Property source: The source of the host that you want to create.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Local: an on-premises host</li>
         * <li>Ecs: an Elastic Compute Service (ECS) instance</li>
         * <li>Rds: a host in a dedicated cluster</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param source Property source: The source of the host that you want to create. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: The source of the host that you want to create.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Local: an on-premises host</li>
         * <li>Ecs: an Elastic Compute Service (ECS) instance</li>
         * <li>Rds: a host in a dedicated cluster</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param source Property source: The source of the host that you want to create. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * Property comment: The description of the host that you want to create.
         * <p>
         * The value can be up to 500 characters.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The description of the host that you want to create. This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * Property comment: The description of the host that you want to create.
         * <p>
         * The value can be up to 500 characters.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The description of the host that you want to create. This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * Property hostPrivateAddress: The internal endpoint of the host that you want to create.
         * <p>
         * You can set this parameter to a domain name or an IP address.
         * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
         * <p>
         * @return {@code this}
         * @param hostPrivateAddress Property hostPrivateAddress: The internal endpoint of the host that you want to create. This parameter is required.
         */
        public Builder hostPrivateAddress(final java.lang.String hostPrivateAddress) {
            this.props.hostPrivateAddress(hostPrivateAddress);
            return this;
        }
        /**
         * Property hostPrivateAddress: The internal endpoint of the host that you want to create.
         * <p>
         * You can set this parameter to a domain name or an IP address.
         * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
         * <p>
         * @return {@code this}
         * @param hostPrivateAddress Property hostPrivateAddress: The internal endpoint of the host that you want to create. This parameter is required.
         */
        public Builder hostPrivateAddress(final com.aliyun.ros.cdk.core.IResolvable hostPrivateAddress) {
            this.props.hostPrivateAddress(hostPrivateAddress);
            return this;
        }

        /**
         * Property hostPublicAddress: The public endpoint of the host that you want to create.
         * <p>
         * You can set this parameter to a domain name or an IP address.
         * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
         * <p>
         * @return {@code this}
         * @param hostPublicAddress Property hostPublicAddress: The public endpoint of the host that you want to create. This parameter is required.
         */
        public Builder hostPublicAddress(final java.lang.String hostPublicAddress) {
            this.props.hostPublicAddress(hostPublicAddress);
            return this;
        }
        /**
         * Property hostPublicAddress: The public endpoint of the host that you want to create.
         * <p>
         * You can set this parameter to a domain name or an IP address.
         * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
         * <p>
         * @return {@code this}
         * @param hostPublicAddress Property hostPublicAddress: The public endpoint of the host that you want to create. This parameter is required.
         */
        public Builder hostPublicAddress(final com.aliyun.ros.cdk.core.IResolvable hostPublicAddress) {
            this.props.hostPublicAddress(hostPublicAddress);
            return this;
        }

        /**
         * Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
         * <p>
         * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
         * <p>
         * @return {@code this}
         * @param instanceRegionId Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides. This parameter is required.
         */
        public Builder instanceRegionId(final java.lang.String instanceRegionId) {
            this.props.instanceRegionId(instanceRegionId);
            return this;
        }
        /**
         * Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
         * <p>
         * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
         * <p>
         * @return {@code this}
         * @param instanceRegionId Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides. This parameter is required.
         */
        public Builder instanceRegionId(final com.aliyun.ros.cdk.core.IResolvable instanceRegionId) {
            this.props.instanceRegionId(instanceRegionId);
            return this;
        }

        /**
         * Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
         * <p>
         * Note This parameter is required if the Source parameter is set to Ecs or Rds.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create. This parameter is required.
         */
        public Builder sourceInstanceId(final java.lang.String sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }
        /**
         * Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
         * <p>
         * Note This parameter is required if the Source parameter is set to Ecs or Rds.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create. This parameter is required.
         */
        public Builder sourceInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bastionhost.Host}.
         */
        @Override
        public com.aliyun.ros.cdk.bastionhost.Host build() {
            return new com.aliyun.ros.cdk.bastionhost.Host(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
