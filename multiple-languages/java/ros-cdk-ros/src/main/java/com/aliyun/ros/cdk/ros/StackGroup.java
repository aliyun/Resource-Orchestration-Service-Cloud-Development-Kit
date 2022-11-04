package com.aliyun.ros.cdk.ros;

/**
 * A ROS resource type:  `ALIYUN::ROS::StackGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:43.723Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.StackGroup")
public class StackGroup extends com.aliyun.ros.cdk.core.Resource {

    protected StackGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StackGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ROS::StackGroup`.
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
    public StackGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.StackGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ROS::StackGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public StackGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.StackGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute StackGroupId: undefined.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStackGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrStackGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.StackGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.StackGroup> {
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
        private final com.aliyun.ros.cdk.ros.StackGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.StackGroupProps.Builder();
        }

        /**
         * Property stackGroupName: undefined.
         * <p>
         * @return {@code this}
         * @param stackGroupName Property stackGroupName: undefined. This parameter is required.
         */
        public Builder stackGroupName(final java.lang.String stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }
        /**
         * Property stackGroupName: undefined.
         * <p>
         * @return {@code this}
         * @param stackGroupName Property stackGroupName: undefined. This parameter is required.
         */
        public Builder stackGroupName(final com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }

        /**
         * Property administrationRoleName: undefined.
         * <p>
         * @return {@code this}
         * @param administrationRoleName Property administrationRoleName: undefined. This parameter is required.
         */
        public Builder administrationRoleName(final java.lang.String administrationRoleName) {
            this.props.administrationRoleName(administrationRoleName);
            return this;
        }
        /**
         * Property administrationRoleName: undefined.
         * <p>
         * @return {@code this}
         * @param administrationRoleName Property administrationRoleName: undefined. This parameter is required.
         */
        public Builder administrationRoleName(final com.aliyun.ros.cdk.core.IResolvable administrationRoleName) {
            this.props.administrationRoleName(administrationRoleName);
            return this;
        }

        /**
         * Property autoDeployment: undefined.
         * <p>
         * @return {@code this}
         * @param autoDeployment Property autoDeployment: undefined. This parameter is required.
         */
        public Builder autoDeployment(final com.aliyun.ros.cdk.core.IResolvable autoDeployment) {
            this.props.autoDeployment(autoDeployment);
            return this;
        }
        /**
         * Property autoDeployment: undefined.
         * <p>
         * @return {@code this}
         * @param autoDeployment Property autoDeployment: undefined. This parameter is required.
         */
        public Builder autoDeployment(final com.aliyun.ros.cdk.ros.RosStackGroup.AutoDeploymentProperty autoDeployment) {
            this.props.autoDeployment(autoDeployment);
            return this;
        }

        /**
         * Property description: undefined.
         * <p>
         * @return {@code this}
         * @param description Property description: undefined. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: undefined.
         * <p>
         * @return {@code this}
         * @param description Property description: undefined. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property dynamicTemplateBody: undefined.
         * <p>
         * @return {@code this}
         * @param dynamicTemplateBody Property dynamicTemplateBody: undefined. This parameter is required.
         */
        public Builder dynamicTemplateBody(final com.aliyun.ros.cdk.core.IResolvable dynamicTemplateBody) {
            this.props.dynamicTemplateBody(dynamicTemplateBody);
            return this;
        }
        /**
         * Property dynamicTemplateBody: undefined.
         * <p>
         * @return {@code this}
         * @param dynamicTemplateBody Property dynamicTemplateBody: undefined. This parameter is required.
         */
        public Builder dynamicTemplateBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> dynamicTemplateBody) {
            this.props.dynamicTemplateBody(dynamicTemplateBody);
            return this;
        }

        /**
         * Property executionRoleName: undefined.
         * <p>
         * @return {@code this}
         * @param executionRoleName Property executionRoleName: undefined. This parameter is required.
         */
        public Builder executionRoleName(final java.lang.String executionRoleName) {
            this.props.executionRoleName(executionRoleName);
            return this;
        }
        /**
         * Property executionRoleName: undefined.
         * <p>
         * @return {@code this}
         * @param executionRoleName Property executionRoleName: undefined. This parameter is required.
         */
        public Builder executionRoleName(final com.aliyun.ros.cdk.core.IResolvable executionRoleName) {
            this.props.executionRoleName(executionRoleName);
            return this;
        }

        /**
         * Property parameters: undefined.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: undefined. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: undefined.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: undefined. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property permissionModel: undefined.
         * <p>
         * @return {@code this}
         * @param permissionModel Property permissionModel: undefined. This parameter is required.
         */
        public Builder permissionModel(final java.lang.String permissionModel) {
            this.props.permissionModel(permissionModel);
            return this;
        }
        /**
         * Property permissionModel: undefined.
         * <p>
         * @return {@code this}
         * @param permissionModel Property permissionModel: undefined. This parameter is required.
         */
        public Builder permissionModel(final com.aliyun.ros.cdk.core.IResolvable permissionModel) {
            this.props.permissionModel(permissionModel);
            return this;
        }

        /**
         * Property resourceGroupId: undefined.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: undefined. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: undefined.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: undefined. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property templateBody: undefined.
         * <p>
         * @return {@code this}
         * @param templateBody Property templateBody: undefined. This parameter is required.
         */
        public Builder templateBody(final com.aliyun.ros.cdk.core.IResolvable templateBody) {
            this.props.templateBody(templateBody);
            return this;
        }
        /**
         * Property templateBody: undefined.
         * <p>
         * @return {@code this}
         * @param templateBody Property templateBody: undefined. This parameter is required.
         */
        public Builder templateBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> templateBody) {
            this.props.templateBody(templateBody);
            return this;
        }

        /**
         * Property templateId: undefined.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: undefined. This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * Property templateId: undefined.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: undefined. This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * Property templateUrl: undefined.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: undefined. This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }
        /**
         * Property templateUrl: undefined.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: undefined. This parameter is required.
         */
        public Builder templateUrl(final com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }

        /**
         * Property templateVersion: undefined.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: undefined. This parameter is required.
         */
        public Builder templateVersion(final java.lang.String templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }
        /**
         * Property templateVersion: undefined.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: undefined. This parameter is required.
         */
        public Builder templateVersion(final com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ros.StackGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.StackGroup build() {
            return new com.aliyun.ros.cdk.ros.StackGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
