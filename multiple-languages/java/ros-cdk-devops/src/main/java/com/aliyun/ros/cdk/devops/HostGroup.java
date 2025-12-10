package com.aliyun.ros.cdk.devops;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DEVOPS::HostGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.413Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.HostGroup")
public class HostGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.devops.IHostGroup {

    protected HostGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HostGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.HostGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.HostGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HostGroupId: The id of the host group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.HostGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.devops.HostGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.devops.HostGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.devops.HostGroup> {
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
        private final com.aliyun.ros.cdk.devops.HostGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.devops.HostGroupProps.Builder();
        }

        /**
         * Property name: Host group name.
         * <p>
         * @return {@code this}
         * @param name Property name: Host group name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Host group name.
         * <p>
         * @return {@code this}
         * @param name Property name: Host group name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
         * <p>
         * @return {@code this}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         */
        public Builder organizationId(final java.lang.String organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }
        /**
         * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
         * <p>
         * @return {@code this}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         */
        public Builder organizationId(final com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }

        /**
         * Property serviceConnectionId: Service connection.
         * <p>
         * @return {@code this}
         * @param serviceConnectionId Property serviceConnectionId: Service connection. This parameter is required.
         */
        public Builder serviceConnectionId(final java.lang.Number serviceConnectionId) {
            this.props.serviceConnectionId(serviceConnectionId);
            return this;
        }
        /**
         * Property serviceConnectionId: Service connection.
         * <p>
         * @return {@code this}
         * @param serviceConnectionId Property serviceConnectionId: Service connection. This parameter is required.
         */
        public Builder serviceConnectionId(final com.aliyun.ros.cdk.core.IResolvable serviceConnectionId) {
            this.props.serviceConnectionId(serviceConnectionId);
            return this;
        }

        /**
         * Property aliyunRegion: The aliyun region.
         * <p>
         * @return {@code this}
         * @param aliyunRegion Property aliyunRegion: The aliyun region. This parameter is required.
         */
        public Builder aliyunRegion(final java.lang.String aliyunRegion) {
            this.props.aliyunRegion(aliyunRegion);
            return this;
        }
        /**
         * Property aliyunRegion: The aliyun region.
         * <p>
         * @return {@code this}
         * @param aliyunRegion Property aliyunRegion: The aliyun region. This parameter is required.
         */
        public Builder aliyunRegion(final com.aliyun.ros.cdk.core.IResolvable aliyunRegion) {
            this.props.aliyunRegion(aliyunRegion);
            return this;
        }

        /**
         * Property ecsLabelKey: The tag key of the ECS.
         * <p>
         * @return {@code this}
         * @param ecsLabelKey Property ecsLabelKey: The tag key of the ECS. This parameter is required.
         */
        public Builder ecsLabelKey(final java.lang.String ecsLabelKey) {
            this.props.ecsLabelKey(ecsLabelKey);
            return this;
        }
        /**
         * Property ecsLabelKey: The tag key of the ECS.
         * <p>
         * @return {@code this}
         * @param ecsLabelKey Property ecsLabelKey: The tag key of the ECS. This parameter is required.
         */
        public Builder ecsLabelKey(final com.aliyun.ros.cdk.core.IResolvable ecsLabelKey) {
            this.props.ecsLabelKey(ecsLabelKey);
            return this;
        }

        /**
         * Property ecsLabelValue: The tag value of the ECS.
         * <p>
         * @return {@code this}
         * @param ecsLabelValue Property ecsLabelValue: The tag value of the ECS. This parameter is required.
         */
        public Builder ecsLabelValue(final java.lang.String ecsLabelValue) {
            this.props.ecsLabelValue(ecsLabelValue);
            return this;
        }
        /**
         * Property ecsLabelValue: The tag value of the ECS.
         * <p>
         * @return {@code this}
         * @param ecsLabelValue Property ecsLabelValue: The tag value of the ECS. This parameter is required.
         */
        public Builder ecsLabelValue(final com.aliyun.ros.cdk.core.IResolvable ecsLabelValue) {
            this.props.ecsLabelValue(ecsLabelValue);
            return this;
        }

        /**
         * Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
         * <p>
         * @return {@code this}
         * @param ecsType Property ecsType: The type of ECS, currently only supports ECS_ALIYUN. This parameter is required.
         */
        public Builder ecsType(final java.lang.String ecsType) {
            this.props.ecsType(ecsType);
            return this;
        }
        /**
         * Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
         * <p>
         * @return {@code this}
         * @param ecsType Property ecsType: The type of ECS, currently only supports ECS_ALIYUN. This parameter is required.
         */
        public Builder ecsType(final com.aliyun.ros.cdk.core.IResolvable ecsType) {
            this.props.ecsType(ecsType);
            return this;
        }

        /**
         * Property envId: Environment id.
         * <p>
         * @return {@code this}
         * @param envId Property envId: Environment id. This parameter is required.
         */
        public Builder envId(final java.lang.String envId) {
            this.props.envId(envId);
            return this;
        }
        /**
         * Property envId: Environment id.
         * <p>
         * @return {@code this}
         * @param envId Property envId: Environment id. This parameter is required.
         */
        public Builder envId(final com.aliyun.ros.cdk.core.IResolvable envId) {
            this.props.envId(envId);
            return this;
        }

        /**
         * Property machineInfos: The machine infos.
         * <p>
         * @return {@code this}
         * @param machineInfos Property machineInfos: The machine infos. This parameter is required.
         */
        public Builder machineInfos(final com.aliyun.ros.cdk.core.IResolvable machineInfos) {
            this.props.machineInfos(machineInfos);
            return this;
        }
        /**
         * Property machineInfos: The machine infos.
         * <p>
         * @return {@code this}
         * @param machineInfos Property machineInfos: The machine infos. This parameter is required.
         */
        public Builder machineInfos(final java.util.List<? extends java.lang.Object> machineInfos) {
            this.props.machineInfos(machineInfos);
            return this;
        }

        /**
         * Property tagIds: The ids of tag.
         * <p>
         * @return {@code this}
         * @param tagIds Property tagIds: The ids of tag. This parameter is required.
         */
        public Builder tagIds(final com.aliyun.ros.cdk.core.IResolvable tagIds) {
            this.props.tagIds(tagIds);
            return this;
        }
        /**
         * Property tagIds: The ids of tag.
         * <p>
         * @return {@code this}
         * @param tagIds Property tagIds: The ids of tag. This parameter is required.
         */
        public Builder tagIds(final java.util.List<? extends java.lang.Object> tagIds) {
            this.props.tagIds(tagIds);
            return this;
        }

        /**
         * Property type: Host group type, currently only supports ECS.
         * <p>
         * @return {@code this}
         * @param type Property type: Host group type, currently only supports ECS. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Host group type, currently only supports ECS.
         * <p>
         * @return {@code this}
         * @param type Property type: Host group type, currently only supports ECS. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.devops.HostGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.devops.HostGroup build() {
            return new com.aliyun.ros.cdk.devops.HostGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
