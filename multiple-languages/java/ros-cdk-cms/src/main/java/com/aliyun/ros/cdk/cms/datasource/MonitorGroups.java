package com.aliyun.ros.cdk.cms.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::CMS::MonitorGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:24.018Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.MonitorGroups")
public class MonitorGroups extends com.aliyun.ros.cdk.core.Resource {

    protected MonitorGroups(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MonitorGroups(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::CMS::MonitorGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public MonitorGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cms.datasource.MonitorGroupsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::CMS::MonitorGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public MonitorGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cms.datasource.MonitorGroupsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::CMS::MonitorGroups</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public MonitorGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute GroupIds: The list of group IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MonitorGroups: The list of monitor groups.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMonitorGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitorGroups", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.datasource.MonitorGroups}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.datasource.MonitorGroups> {
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
        private com.aliyun.ros.cdk.cms.datasource.MonitorGroupsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dynamicTagRuleId: The ID of the tag rule.
         * <p>
         * @return {@code this}
         * @param dynamicTagRuleId Property dynamicTagRuleId: The ID of the tag rule. This parameter is required.
         */
        public Builder dynamicTagRuleId(final java.lang.String dynamicTagRuleId) {
            this.props().dynamicTagRuleId(dynamicTagRuleId);
            return this;
        }
        /**
         * Property dynamicTagRuleId: The ID of the tag rule.
         * <p>
         * @return {@code this}
         * @param dynamicTagRuleId Property dynamicTagRuleId: The ID of the tag rule. This parameter is required.
         */
        public Builder dynamicTagRuleId(final com.aliyun.ros.cdk.core.IResolvable dynamicTagRuleId) {
            this.props().dynamicTagRuleId(dynamicTagRuleId);
            return this;
        }

        /**
         * Property groupId: The IDs of the application groups.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The IDs of the application groups. This parameter is required.
         */
        public Builder groupId(final java.lang.Number groupId) {
            this.props().groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The IDs of the application groups.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The IDs of the application groups. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props().groupId(groupId);
            return this;
        }

        /**
         * Property monitorGroupName: The name of the application group.
         * <p>
         * @return {@code this}
         * @param monitorGroupName Property monitorGroupName: The name of the application group. This parameter is required.
         */
        public Builder monitorGroupName(final java.lang.String monitorGroupName) {
            this.props().monitorGroupName(monitorGroupName);
            return this;
        }
        /**
         * Property monitorGroupName: The name of the application group.
         * <p>
         * @return {@code this}
         * @param monitorGroupName Property monitorGroupName: The name of the application group. This parameter is required.
         */
        public Builder monitorGroupName(final com.aliyun.ros.cdk.core.IResolvable monitorGroupName) {
            this.props().monitorGroupName(monitorGroupName);
            return this;
        }

        /**
         * Property type: The type of the application group.
         * <p>
         * Valid values:
         * custom: a self-managed application group.
         * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
         * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the application group. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props().type(type);
            return this;
        }
        /**
         * Property type: The type of the application group.
         * <p>
         * Valid values:
         * custom: a self-managed application group.
         * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
         * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the application group. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props().type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.datasource.MonitorGroups}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.datasource.MonitorGroups build() {
            return new com.aliyun.ros.cdk.cms.datasource.MonitorGroups(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cms.datasource.MonitorGroupsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cms.datasource.MonitorGroupsProps.Builder();
            }
            return this.props;
        }
    }
}
