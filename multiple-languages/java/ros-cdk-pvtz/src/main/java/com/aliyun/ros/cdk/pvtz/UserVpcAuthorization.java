package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS resource type:  `ALIYUN::PVTZ::UserVpcAuthorization`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.098Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.UserVpcAuthorization")
public class UserVpcAuthorization extends com.aliyun.ros.cdk.core.Resource {

    protected UserVpcAuthorization(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserVpcAuthorization(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::PVTZ::UserVpcAuthorization`.
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
    public UserVpcAuthorization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::PVTZ::UserVpcAuthorization`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public UserVpcAuthorization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthorizedUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthorizedUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AuthType: Authorization type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthType() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.UserVpcAuthorization}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.UserVpcAuthorization> {
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
        private final com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps.Builder();
        }

        /**
         * Property authorizedUserId: The account ID of the user who authorizes the resource.
         * <p>
         * @return {@code this}
         * @param authorizedUserId Property authorizedUserId: The account ID of the user who authorizes the resource. This parameter is required.
         */
        public Builder authorizedUserId(final java.lang.String authorizedUserId) {
            this.props.authorizedUserId(authorizedUserId);
            return this;
        }
        /**
         * Property authorizedUserId: The account ID of the user who authorizes the resource.
         * <p>
         * @return {@code this}
         * @param authorizedUserId Property authorizedUserId: The account ID of the user who authorizes the resource. This parameter is required.
         */
        public Builder authorizedUserId(final com.aliyun.ros.cdk.core.IResolvable authorizedUserId) {
            this.props.authorizedUserId(authorizedUserId);
            return this;
        }

        /**
         * Property authChannel: Authorization channel.
         * <p>
         * Valid values:
         * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
         * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
         * <p>
         * @return {@code this}
         * @param authChannel Property authChannel: Authorization channel. This parameter is required.
         */
        public Builder authChannel(final java.lang.String authChannel) {
            this.props.authChannel(authChannel);
            return this;
        }
        /**
         * Property authChannel: Authorization channel.
         * <p>
         * Valid values:
         * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
         * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
         * <p>
         * @return {@code this}
         * @param authChannel Property authChannel: Authorization channel. This parameter is required.
         */
        public Builder authChannel(final com.aliyun.ros.cdk.core.IResolvable authChannel) {
            this.props.authChannel(authChannel);
            return this;
        }

        /**
         * Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
         * <p>
         * @return {@code this}
         * @param authCode Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory. This parameter is required.
         */
        public Builder authCode(final java.lang.String authCode) {
            this.props.authCode(authCode);
            return this;
        }
        /**
         * Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
         * <p>
         * @return {@code this}
         * @param authCode Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory. This parameter is required.
         */
        public Builder authCode(final com.aliyun.ros.cdk.core.IResolvable authCode) {
            this.props.authCode(authCode);
            return this;
        }

        /**
         * Property authType: Authorization type.
         * <p>
         * @return {@code this}
         * @param authType Property authType: Authorization type. This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }
        /**
         * Property authType: Authorization type.
         * <p>
         * @return {@code this}
         * @param authType Property authType: Authorization type. This parameter is required.
         */
        public Builder authType(final com.aliyun.ros.cdk.core.IResolvable authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.pvtz.UserVpcAuthorization}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.UserVpcAuthorization build() {
            return new com.aliyun.ros.cdk.pvtz.UserVpcAuthorization(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
