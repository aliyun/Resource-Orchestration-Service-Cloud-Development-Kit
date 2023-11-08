package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a <code>ALIYUN::PVTZ::UserVpcAuthorization</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.UserVpcAuthorizationProps")
@software.amazon.jsii.Jsii.Proxy(UserVpcAuthorizationProps.Jsii$Proxy.class)
public interface UserVpcAuthorizationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property authorizedUserId: The account ID of the user who authorizes the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuthorizedUserId();

    /**
     * Property authChannel: Authorization channel.
     * <p>
     * Valid values:
     * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
     * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthChannel() {
        return null;
    }

    /**
     * Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthCode() {
        return null;
    }

    /**
     * Property authType: Authorization type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
        return null;
    }

    /**
     * Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreDeletionForbidden() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UserVpcAuthorizationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserVpcAuthorizationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserVpcAuthorizationProps> {
        java.lang.Object authorizedUserId;
        java.lang.Object authChannel;
        java.lang.Object authCode;
        java.lang.Object authType;
        java.lang.Object ignoreDeletionForbidden;

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthorizedUserId}
         * @param authorizedUserId Property authorizedUserId: The account ID of the user who authorizes the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder authorizedUserId(java.lang.String authorizedUserId) {
            this.authorizedUserId = authorizedUserId;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthorizedUserId}
         * @param authorizedUserId Property authorizedUserId: The account ID of the user who authorizes the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder authorizedUserId(com.aliyun.ros.cdk.core.IResolvable authorizedUserId) {
            this.authorizedUserId = authorizedUserId;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthChannel}
         * @param authChannel Property authChannel: Authorization channel.
         *                    Valid values:
         *                    AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
         *                    RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
         * @return {@code this}
         */
        public Builder authChannel(java.lang.String authChannel) {
            this.authChannel = authChannel;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthChannel}
         * @param authChannel Property authChannel: Authorization channel.
         *                    Valid values:
         *                    AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
         *                    RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
         * @return {@code this}
         */
        public Builder authChannel(com.aliyun.ros.cdk.core.IResolvable authChannel) {
            this.authChannel = authChannel;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthCode}
         * @param authCode Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
         * @return {@code this}
         */
        public Builder authCode(java.lang.String authCode) {
            this.authCode = authCode;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthCode}
         * @param authCode Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
         * @return {@code this}
         */
        public Builder authCode(com.aliyun.ros.cdk.core.IResolvable authCode) {
            this.authCode = authCode;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthType}
         * @param authType Property authType: Authorization type.
         * @return {@code this}
         */
        public Builder authType(java.lang.String authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getAuthType}
         * @param authType Property authType: Authorization type.
         * @return {@code this}
         */
        public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getIgnoreDeletionForbidden}
         * @param ignoreDeletionForbidden Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists.
         * @return {@code this}
         */
        public Builder ignoreDeletionForbidden(java.lang.Boolean ignoreDeletionForbidden) {
            this.ignoreDeletionForbidden = ignoreDeletionForbidden;
            return this;
        }

        /**
         * Sets the value of {@link UserVpcAuthorizationProps#getIgnoreDeletionForbidden}
         * @param ignoreDeletionForbidden Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists.
         * @return {@code this}
         */
        public Builder ignoreDeletionForbidden(com.aliyun.ros.cdk.core.IResolvable ignoreDeletionForbidden) {
            this.ignoreDeletionForbidden = ignoreDeletionForbidden;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserVpcAuthorizationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserVpcAuthorizationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserVpcAuthorizationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserVpcAuthorizationProps {
        private final java.lang.Object authorizedUserId;
        private final java.lang.Object authChannel;
        private final java.lang.Object authCode;
        private final java.lang.Object authType;
        private final java.lang.Object ignoreDeletionForbidden;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.authorizedUserId = software.amazon.jsii.Kernel.get(this, "authorizedUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authChannel = software.amazon.jsii.Kernel.get(this, "authChannel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authCode = software.amazon.jsii.Kernel.get(this, "authCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoreDeletionForbidden = software.amazon.jsii.Kernel.get(this, "ignoreDeletionForbidden", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.authorizedUserId = java.util.Objects.requireNonNull(builder.authorizedUserId, "authorizedUserId is required");
            this.authChannel = builder.authChannel;
            this.authCode = builder.authCode;
            this.authType = builder.authType;
            this.ignoreDeletionForbidden = builder.ignoreDeletionForbidden;
        }

        @Override
        public final java.lang.Object getAuthorizedUserId() {
            return this.authorizedUserId;
        }

        @Override
        public final java.lang.Object getAuthChannel() {
            return this.authChannel;
        }

        @Override
        public final java.lang.Object getAuthCode() {
            return this.authCode;
        }

        @Override
        public final java.lang.Object getAuthType() {
            return this.authType;
        }

        @Override
        public final java.lang.Object getIgnoreDeletionForbidden() {
            return this.ignoreDeletionForbidden;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("authorizedUserId", om.valueToTree(this.getAuthorizedUserId()));
            if (this.getAuthChannel() != null) {
                data.set("authChannel", om.valueToTree(this.getAuthChannel()));
            }
            if (this.getAuthCode() != null) {
                data.set("authCode", om.valueToTree(this.getAuthCode()));
            }
            if (this.getAuthType() != null) {
                data.set("authType", om.valueToTree(this.getAuthType()));
            }
            if (this.getIgnoreDeletionForbidden() != null) {
                data.set("ignoreDeletionForbidden", om.valueToTree(this.getIgnoreDeletionForbidden()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.UserVpcAuthorizationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserVpcAuthorizationProps.Jsii$Proxy that = (UserVpcAuthorizationProps.Jsii$Proxy) o;

            if (!authorizedUserId.equals(that.authorizedUserId)) return false;
            if (this.authChannel != null ? !this.authChannel.equals(that.authChannel) : that.authChannel != null) return false;
            if (this.authCode != null ? !this.authCode.equals(that.authCode) : that.authCode != null) return false;
            if (this.authType != null ? !this.authType.equals(that.authType) : that.authType != null) return false;
            return this.ignoreDeletionForbidden != null ? this.ignoreDeletionForbidden.equals(that.ignoreDeletionForbidden) : that.ignoreDeletionForbidden == null;
        }

        @Override
        public final int hashCode() {
            int result = this.authorizedUserId.hashCode();
            result = 31 * result + (this.authChannel != null ? this.authChannel.hashCode() : 0);
            result = 31 * result + (this.authCode != null ? this.authCode.hashCode() : 0);
            result = 31 * result + (this.authType != null ? this.authType.hashCode() : 0);
            result = 31 * result + (this.ignoreDeletionForbidden != null ? this.ignoreDeletionForbidden.hashCode() : 0);
            return result;
        }
    }
}
