package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  <code>ALIYUN::ApiGateway::Authorization</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:27:59.745Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.Authorization")
public class Authorization extends com.aliyun.ros.cdk.core.Resource {

    protected Authorization(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Authorization(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ApiGateway::Authorization</code>.
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
    public Authorization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.AuthorizationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ApiGateway::Authorization</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Authorization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.AuthorizationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.Authorization}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.Authorization> {
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
        private final com.aliyun.ros.cdk.apigateway.AuthorizationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.AuthorizationProps.Builder();
        }

        /**
         * Property apiIds: APIs to authorize.
         * <p>
         * @return {@code this}
         * @param apiIds Property apiIds: APIs to authorize. This parameter is required.
         */
        public Builder apiIds(final java.util.List<? extends java.lang.Object> apiIds) {
            this.props.apiIds(apiIds);
            return this;
        }
        /**
         * Property apiIds: APIs to authorize.
         * <p>
         * @return {@code this}
         * @param apiIds Property apiIds: APIs to authorize. This parameter is required.
         */
        public Builder apiIds(final com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.props.apiIds(apiIds);
            return this;
        }

        /**
         * Property appIds: APPs are authorized to APIs.
         * <p>
         * @return {@code this}
         * @param appIds Property appIds: APPs are authorized to APIs. This parameter is required.
         */
        public Builder appIds(final java.util.List<? extends java.lang.Object> appIds) {
            this.props.appIds(appIds);
            return this;
        }
        /**
         * Property appIds: APPs are authorized to APIs.
         * <p>
         * @return {@code this}
         * @param appIds Property appIds: APPs are authorized to APIs. This parameter is required.
         */
        public Builder appIds(final com.aliyun.ros.cdk.core.IResolvable appIds) {
            this.props.appIds(appIds);
            return this;
        }

        /**
         * Property groupId: The id of the group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The id of the group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property stageName: Authorize in this stage.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: Authorize in this stage. This parameter is required.
         */
        public Builder stageName(final java.lang.String stageName) {
            this.props.stageName(stageName);
            return this;
        }
        /**
         * Property stageName: Authorize in this stage.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: Authorize in this stage. This parameter is required.
         */
        public Builder stageName(final com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.props.stageName(stageName);
            return this;
        }

        /**
         * Property authValidTime: The time (UTC) when the authorization expires.
         * <p>
         * If this parameter is empty, the authorization does not expire.
         * Pattern: YYYY-MM-DDThh:mm:ssZ
         * <p>
         * @return {@code this}
         * @param authValidTime Property authValidTime: The time (UTC) when the authorization expires. This parameter is required.
         */
        public Builder authValidTime(final java.lang.String authValidTime) {
            this.props.authValidTime(authValidTime);
            return this;
        }
        /**
         * Property authValidTime: The time (UTC) when the authorization expires.
         * <p>
         * If this parameter is empty, the authorization does not expire.
         * Pattern: YYYY-MM-DDThh:mm:ssZ
         * <p>
         * @return {@code this}
         * @param authValidTime Property authValidTime: The time (UTC) when the authorization expires. This parameter is required.
         */
        public Builder authValidTime(final com.aliyun.ros.cdk.core.IResolvable authValidTime) {
            this.props.authValidTime(authValidTime);
            return this;
        }

        /**
         * Property description: Description of the authorization, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the authorization, less than 180 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the authorization, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the authorization, less than 180 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.Authorization}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.Authorization build() {
            return new com.aliyun.ros.cdk.apigateway.Authorization(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
