package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a <code>RosUserVpcAuthorization</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:41.563Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosUserVpcAuthorizationProps")
@software.amazon.jsii.Jsii.Proxy(RosUserVpcAuthorizationProps.Jsii$Proxy.class)
public interface RosUserVpcAuthorizationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuthorizedUserId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthChannel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreDeletionForbidden() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosUserVpcAuthorizationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserVpcAuthorizationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserVpcAuthorizationProps> {
        java.lang.Object authorizedUserId;
        java.lang.Object authChannel;
        java.lang.Object authCode;
        java.lang.Object authType;
        java.lang.Object ignoreDeletionForbidden;

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthorizedUserId}
         * @param authorizedUserId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authorizedUserId(java.lang.String authorizedUserId) {
            this.authorizedUserId = authorizedUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthorizedUserId}
         * @param authorizedUserId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authorizedUserId(com.aliyun.ros.cdk.core.IResolvable authorizedUserId) {
            this.authorizedUserId = authorizedUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthChannel}
         * @param authChannel the value to be set.
         * @return {@code this}
         */
        public Builder authChannel(java.lang.String authChannel) {
            this.authChannel = authChannel;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthChannel}
         * @param authChannel the value to be set.
         * @return {@code this}
         */
        public Builder authChannel(com.aliyun.ros.cdk.core.IResolvable authChannel) {
            this.authChannel = authChannel;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthCode}
         * @param authCode the value to be set.
         * @return {@code this}
         */
        public Builder authCode(java.lang.String authCode) {
            this.authCode = authCode;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthCode}
         * @param authCode the value to be set.
         * @return {@code this}
         */
        public Builder authCode(com.aliyun.ros.cdk.core.IResolvable authCode) {
            this.authCode = authCode;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthType}
         * @param authType the value to be set.
         * @return {@code this}
         */
        public Builder authType(java.lang.String authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getAuthType}
         * @param authType the value to be set.
         * @return {@code this}
         */
        public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getIgnoreDeletionForbidden}
         * @param ignoreDeletionForbidden the value to be set.
         * @return {@code this}
         */
        public Builder ignoreDeletionForbidden(java.lang.Boolean ignoreDeletionForbidden) {
            this.ignoreDeletionForbidden = ignoreDeletionForbidden;
            return this;
        }

        /**
         * Sets the value of {@link RosUserVpcAuthorizationProps#getIgnoreDeletionForbidden}
         * @param ignoreDeletionForbidden the value to be set.
         * @return {@code this}
         */
        public Builder ignoreDeletionForbidden(com.aliyun.ros.cdk.core.IResolvable ignoreDeletionForbidden) {
            this.ignoreDeletionForbidden = ignoreDeletionForbidden;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserVpcAuthorizationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserVpcAuthorizationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserVpcAuthorizationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserVpcAuthorizationProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.RosUserVpcAuthorizationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserVpcAuthorizationProps.Jsii$Proxy that = (RosUserVpcAuthorizationProps.Jsii$Proxy) o;

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
