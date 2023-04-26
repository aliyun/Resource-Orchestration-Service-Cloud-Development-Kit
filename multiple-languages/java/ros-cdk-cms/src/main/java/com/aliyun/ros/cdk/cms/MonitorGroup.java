package com.aliyun.ros.cdk.cms;

/**
 * A ROS resource type:  `ALIYUN::CMS::MonitorGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:18.543Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MonitorGroup")
public class MonitorGroup extends com.aliyun.ros.cdk.core.Resource {

    protected MonitorGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MonitorGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
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
    public MonitorGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.MonitorGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MonitorGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.MonitorGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupId: Application group ID generated after the group is created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.MonitorGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.MonitorGroup> {
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
        private final com.aliyun.ros.cdk.cms.MonitorGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.MonitorGroupProps.Builder();
        }

        /**
         * Property groupName: The name of the application group.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the application group. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The name of the application group.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the application group. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property contactGroups: The alert contact group.
         * <p>
         * Alert notifications for the application group are sent to
         * the specified alert contact group.
         * <p>
         * @return {@code this}
         * @param contactGroups Property contactGroups: The alert contact group. This parameter is required.
         */
        public Builder contactGroups(final java.lang.String contactGroups) {
            this.props.contactGroups(contactGroups);
            return this;
        }
        /**
         * Property contactGroups: The alert contact group.
         * <p>
         * Alert notifications for the application group are sent to
         * the specified alert contact group.
         * <p>
         * @return {@code this}
         * @param contactGroups Property contactGroups: The alert contact group. This parameter is required.
         */
        public Builder contactGroups(final com.aliyun.ros.cdk.core.IResolvable contactGroups) {
            this.props.contactGroups(contactGroups);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.MonitorGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.MonitorGroup build() {
            return new com.aliyun.ros.cdk.cms.MonitorGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
