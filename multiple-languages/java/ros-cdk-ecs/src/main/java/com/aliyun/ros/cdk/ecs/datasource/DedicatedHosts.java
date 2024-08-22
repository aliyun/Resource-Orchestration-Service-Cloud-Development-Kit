package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::DedicatedHosts</code>, which is used to query dedicated hosts.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:20.444Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DedicatedHosts")
public class DedicatedHosts extends com.aliyun.ros.cdk.core.Resource {

    protected DedicatedHosts(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHosts(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public DedicatedHosts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public DedicatedHosts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public DedicatedHosts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DedicatedHostIds: The list of dedicated host ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DedicatedHosts: The list of dedicated hosts.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHosts() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHosts", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.DedicatedHosts}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.DedicatedHosts> {
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
        private com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dedicatedHostClusterId: The ID of the dedicated host cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: The ID of the dedicated host cluster. This parameter is required.
         */
        public Builder dedicatedHostClusterId(final java.lang.String dedicatedHostClusterId) {
            this.props().dedicatedHostClusterId(dedicatedHostClusterId);
            return this;
        }
        /**
         * Property dedicatedHostClusterId: The ID of the dedicated host cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: The ID of the dedicated host cluster. This parameter is required.
         */
        public Builder dedicatedHostClusterId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterId) {
            this.props().dedicatedHostClusterId(dedicatedHostClusterId);
            return this;
        }

        /**
         * Property dedicatedHostIds: The IDs of the dedicated hosts.
         * <p>
         * You can specify up to 100 dedicated host IDs.
         * <p>
         * @return {@code this}
         * @param dedicatedHostIds Property dedicatedHostIds: The IDs of the dedicated hosts. This parameter is required.
         */
        public Builder dedicatedHostIds(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostIds) {
            this.props().dedicatedHostIds(dedicatedHostIds);
            return this;
        }
        /**
         * Property dedicatedHostIds: The IDs of the dedicated hosts.
         * <p>
         * You can specify up to 100 dedicated host IDs.
         * <p>
         * @return {@code this}
         * @param dedicatedHostIds Property dedicatedHostIds: The IDs of the dedicated hosts. This parameter is required.
         */
        public Builder dedicatedHostIds(final java.util.List<? extends java.lang.Object> dedicatedHostIds) {
            this.props().dedicatedHostIds(dedicatedHostIds);
            return this;
        }

        /**
         * Property dedicatedHostName: The name of the dedicated host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostName(final java.lang.String dedicatedHostName) {
            this.props().dedicatedHostName(dedicatedHostName);
            return this;
        }
        /**
         * Property dedicatedHostName: The name of the dedicated host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostName(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostName) {
            this.props().dedicatedHostName(dedicatedHostName);
            return this;
        }

        /**
         * Property dedicatedHostType: The type of the dedicated host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostType Property dedicatedHostType: The type of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostType(final java.lang.String dedicatedHostType) {
            this.props().dedicatedHostType(dedicatedHostType);
            return this;
        }
        /**
         * Property dedicatedHostType: The type of the dedicated host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostType Property dedicatedHostType: The type of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostType(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostType) {
            this.props().dedicatedHostType(dedicatedHostType);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the dedicated host belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the dedicated host belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property status: The service status of the dedicated host.
         * <p>
         * Valid values:
         * Available: The dedicated host is running normally.
         * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
         * PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
         * Default value: Available.
         * <p>
         * @return {@code this}
         * @param status Property status: The service status of the dedicated host. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
        }
        /**
         * Property status: The service status of the dedicated host.
         * <p>
         * Valid values:
         * Available: The dedicated host is running normally.
         * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
         * PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
         * Default value: Available.
         * <p>
         * @return {@code this}
         * @param status Property status: The service status of the dedicated host. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * Property tags: Tags of ddh.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of ddh. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosDedicatedHosts.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the dedicated host.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the dedicated host. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the dedicated host.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the dedicated host. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.DedicatedHosts}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.DedicatedHosts build() {
            return new com.aliyun.ros.cdk.ecs.datasource.DedicatedHosts(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.DedicatedHostsProps.Builder();
            }
            return this.props;
        }
    }
}
