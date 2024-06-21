package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>Authorization</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.384Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.AuthorizationProps")
@software.amazon.jsii.Jsii.Proxy(AuthorizationProps.Jsii$Proxy.class)
public interface AuthorizationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property apiIds: APIs to authorize.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiIds();

    /**
     * Property appIds: APPs are authorized to APIs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppIds();

    /**
     * Property groupId: The id of the group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property stageName: Authorize in this stage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStageName();

    /**
     * Property authValidTime: The time (UTC) when the authorization expires.
     * <p>
     * If this parameter is empty, the authorization does not expire.
     * Pattern: YYYY-MM-DDThh:mm:ssZ
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthValidTime() {
        return null;
    }

    /**
     * Property description: Description of the authorization, less than 180 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AuthorizationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AuthorizationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AuthorizationProps> {
        java.lang.Object apiIds;
        java.lang.Object appIds;
        java.lang.Object groupId;
        java.lang.Object stageName;
        java.lang.Object authValidTime;
        java.lang.Object description;

        /**
         * Sets the value of {@link AuthorizationProps#getApiIds}
         * @param apiIds Property apiIds: APIs to authorize. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(java.util.List<? extends java.lang.Object> apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getApiIds}
         * @param apiIds Property apiIds: APIs to authorize. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getAppIds}
         * @param appIds Property appIds: APPs are authorized to APIs. This parameter is required.
         * @return {@code this}
         */
        public Builder appIds(java.util.List<? extends java.lang.Object> appIds) {
            this.appIds = appIds;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getAppIds}
         * @param appIds Property appIds: APPs are authorized to APIs. This parameter is required.
         * @return {@code this}
         */
        public Builder appIds(com.aliyun.ros.cdk.core.IResolvable appIds) {
            this.appIds = appIds;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getGroupId}
         * @param groupId Property groupId: The id of the group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getGroupId}
         * @param groupId Property groupId: The id of the group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getStageName}
         * @param stageName Property stageName: Authorize in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getStageName}
         * @param stageName Property stageName: Authorize in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getAuthValidTime}
         * @param authValidTime Property authValidTime: The time (UTC) when the authorization expires.
         *                      If this parameter is empty, the authorization does not expire.
         *                      Pattern: YYYY-MM-DDThh:mm:ssZ
         * @return {@code this}
         */
        public Builder authValidTime(java.lang.String authValidTime) {
            this.authValidTime = authValidTime;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getAuthValidTime}
         * @param authValidTime Property authValidTime: The time (UTC) when the authorization expires.
         *                      If this parameter is empty, the authorization does not expire.
         *                      Pattern: YYYY-MM-DDThh:mm:ssZ
         * @return {@code this}
         */
        public Builder authValidTime(com.aliyun.ros.cdk.core.IResolvable authValidTime) {
            this.authValidTime = authValidTime;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getDescription}
         * @param description Property description: Description of the authorization, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AuthorizationProps#getDescription}
         * @param description Property description: Description of the authorization, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AuthorizationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AuthorizationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AuthorizationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthorizationProps {
        private final java.lang.Object apiIds;
        private final java.lang.Object appIds;
        private final java.lang.Object groupId;
        private final java.lang.Object stageName;
        private final java.lang.Object authValidTime;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiIds = software.amazon.jsii.Kernel.get(this, "apiIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appIds = software.amazon.jsii.Kernel.get(this, "appIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authValidTime = software.amazon.jsii.Kernel.get(this, "authValidTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiIds = java.util.Objects.requireNonNull(builder.apiIds, "apiIds is required");
            this.appIds = java.util.Objects.requireNonNull(builder.appIds, "appIds is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.stageName = java.util.Objects.requireNonNull(builder.stageName, "stageName is required");
            this.authValidTime = builder.authValidTime;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getApiIds() {
            return this.apiIds;
        }

        @Override
        public final java.lang.Object getAppIds() {
            return this.appIds;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getStageName() {
            return this.stageName;
        }

        @Override
        public final java.lang.Object getAuthValidTime() {
            return this.authValidTime;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiIds", om.valueToTree(this.getApiIds()));
            data.set("appIds", om.valueToTree(this.getAppIds()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("stageName", om.valueToTree(this.getStageName()));
            if (this.getAuthValidTime() != null) {
                data.set("authValidTime", om.valueToTree(this.getAuthValidTime()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.AuthorizationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AuthorizationProps.Jsii$Proxy that = (AuthorizationProps.Jsii$Proxy) o;

            if (!apiIds.equals(that.apiIds)) return false;
            if (!appIds.equals(that.appIds)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!stageName.equals(that.stageName)) return false;
            if (this.authValidTime != null ? !this.authValidTime.equals(that.authValidTime) : that.authValidTime != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.apiIds.hashCode();
            result = 31 * result + (this.appIds.hashCode());
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.stageName.hashCode());
            result = 31 * result + (this.authValidTime != null ? this.authValidTime.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
