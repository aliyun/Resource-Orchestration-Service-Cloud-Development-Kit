package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Group`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.Group")
public class Group extends com.aliyun.ros.cdk.core.Resource {

    protected Group(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Group(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Group`.
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
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.GroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Group`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.GroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupId: The id of the created Group resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SubDomain: The sub domain assigned to the Group by the system.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrSubDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: Tags of app.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.Group}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.Group> {
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
        private final com.aliyun.ros.cdk.apigateway.GroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.GroupProps.Builder();
        }

        /**
         * Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property description: Description of the Group, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the Group, less than 180 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the Group, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the Group, less than 180 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property instanceId: API gateway instance ID.
         * <p>
         * For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: API gateway instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: API gateway instance ID.
         * <p>
         * For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: API gateway instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property internetEnable: Enable or disable internet subdomain.
         * <p>
         * True for enable.
         * <p>
         * @return {@code this}
         * @param internetEnable Property internetEnable: Enable or disable internet subdomain. This parameter is required.
         */
        public Builder internetEnable(final java.lang.Boolean internetEnable) {
            this.props.internetEnable(internetEnable);
            return this;
        }
        /**
         * Property internetEnable: Enable or disable internet subdomain.
         * <p>
         * True for enable.
         * <p>
         * @return {@code this}
         * @param internetEnable Property internetEnable: Enable or disable internet subdomain. This parameter is required.
         */
        public Builder internetEnable(final com.aliyun.ros.cdk.core.IResolvable internetEnable) {
            this.props.internetEnable(internetEnable);
            return this;
        }

        /**
         * Property passthroughHeaders: Pass through headers setting.
         * <p>
         * values:
         * host: pass through host headers
         * <p>
         * @return {@code this}
         * @param passthroughHeaders Property passthroughHeaders: Pass through headers setting. This parameter is required.
         */
        public Builder passthroughHeaders(final java.lang.String passthroughHeaders) {
            this.props.passthroughHeaders(passthroughHeaders);
            return this;
        }
        /**
         * Property passthroughHeaders: Pass through headers setting.
         * <p>
         * values:
         * host: pass through host headers
         * <p>
         * @return {@code this}
         * @param passthroughHeaders Property passthroughHeaders: Pass through headers setting. This parameter is required.
         */
        public Builder passthroughHeaders(final com.aliyun.ros.cdk.core.IResolvable passthroughHeaders) {
            this.props.passthroughHeaders(passthroughHeaders);
            return this;
        }

        /**
         * Property tags: Tags to attach to group.
         * <p>
         * Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to group. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.
         * <p>
         * True for enable.
         * <p>
         * @return {@code this}
         * @param vpcIntranetEnable Property vpcIntranetEnable: Enable or disable VPC intranet subdomain. This parameter is required.
         */
        public Builder vpcIntranetEnable(final java.lang.Boolean vpcIntranetEnable) {
            this.props.vpcIntranetEnable(vpcIntranetEnable);
            return this;
        }
        /**
         * Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.
         * <p>
         * True for enable.
         * <p>
         * @return {@code this}
         * @param vpcIntranetEnable Property vpcIntranetEnable: Enable or disable VPC intranet subdomain. This parameter is required.
         */
        public Builder vpcIntranetEnable(final com.aliyun.ros.cdk.core.IResolvable vpcIntranetEnable) {
            this.props.vpcIntranetEnable(vpcIntranetEnable);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.Group}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.Group build() {
            return new com.aliyun.ros.cdk.apigateway.Group(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
