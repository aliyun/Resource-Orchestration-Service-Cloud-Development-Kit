package com.aliyun.ros.cdk.elasticsearchserverless;

/**
 * Properties for defining a <code>App</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.365Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.AppProps")
@software.amazon.jsii.Jsii.Proxy(AppProps.Jsii$Proxy.class)
public interface AppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appName: The name of the elastic search serverless version app.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     * Property authentication: The authentication of the app.
     * <p>
     * Currently only supports specifying passwords for initial users
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuthentication();

    /**
     * Property quotaInfo: The quota info of the app.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQuotaInfo();

    /**
     * Property appVersion: The version of the app.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppVersion() {
        return null;
    }

    /**
     * Property description: The description of the app.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property network: The public network of the app.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetwork() {
        return null;
    }

    /**
     * Property privateNetwork: The private network of the app.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateNetwork() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AppProps> {
        java.lang.Object appName;
        java.lang.Object authentication;
        java.lang.Object quotaInfo;
        java.lang.Object appVersion;
        java.lang.Object description;
        java.lang.Object network;
        java.lang.Object privateNetwork;

        /**
         * Sets the value of {@link AppProps#getAppName}
         * @param appName Property appName: The name of the elastic search serverless version app. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getAppName}
         * @param appName Property appName: The name of the elastic search serverless version app. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getAuthentication}
         * @param authentication Property authentication: The authentication of the app. This parameter is required.
         *                       Currently only supports specifying passwords for initial users
         * @return {@code this}
         */
        public Builder authentication(com.aliyun.ros.cdk.core.IResolvable authentication) {
            this.authentication = authentication;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getAuthentication}
         * @param authentication Property authentication: The authentication of the app. This parameter is required.
         *                       Currently only supports specifying passwords for initial users
         * @return {@code this}
         */
        public Builder authentication(com.aliyun.ros.cdk.elasticsearchserverless.RosApp.AuthenticationProperty authentication) {
            this.authentication = authentication;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getQuotaInfo}
         * @param quotaInfo Property quotaInfo: The quota info of the app. This parameter is required.
         * @return {@code this}
         */
        public Builder quotaInfo(com.aliyun.ros.cdk.core.IResolvable quotaInfo) {
            this.quotaInfo = quotaInfo;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getQuotaInfo}
         * @param quotaInfo Property quotaInfo: The quota info of the app. This parameter is required.
         * @return {@code this}
         */
        public Builder quotaInfo(com.aliyun.ros.cdk.elasticsearchserverless.RosApp.QuotaInfoProperty quotaInfo) {
            this.quotaInfo = quotaInfo;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getAppVersion}
         * @param appVersion Property appVersion: The version of the app.
         * @return {@code this}
         */
        public Builder appVersion(java.lang.String appVersion) {
            this.appVersion = appVersion;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getAppVersion}
         * @param appVersion Property appVersion: The version of the app.
         * @return {@code this}
         */
        public Builder appVersion(com.aliyun.ros.cdk.core.IResolvable appVersion) {
            this.appVersion = appVersion;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getDescription}
         * @param description Property description: The description of the app.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getDescription}
         * @param description Property description: The description of the app.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getNetwork}
         * @param network Property network: The public network of the app.
         * @return {@code this}
         */
        public Builder network(com.aliyun.ros.cdk.core.IResolvable network) {
            this.network = network;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getNetwork}
         * @param network Property network: The public network of the app.
         * @return {@code this}
         */
        public Builder network(java.util.List<? extends java.lang.Object> network) {
            this.network = network;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getPrivateNetwork}
         * @param privateNetwork Property privateNetwork: The private network of the app.
         * @return {@code this}
         */
        public Builder privateNetwork(com.aliyun.ros.cdk.core.IResolvable privateNetwork) {
            this.privateNetwork = privateNetwork;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getPrivateNetwork}
         * @param privateNetwork Property privateNetwork: The private network of the app.
         * @return {@code this}
         */
        public Builder privateNetwork(java.util.List<? extends java.lang.Object> privateNetwork) {
            this.privateNetwork = privateNetwork;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AppProps {
        private final java.lang.Object appName;
        private final java.lang.Object authentication;
        private final java.lang.Object quotaInfo;
        private final java.lang.Object appVersion;
        private final java.lang.Object description;
        private final java.lang.Object network;
        private final java.lang.Object privateNetwork;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authentication = software.amazon.jsii.Kernel.get(this, "authentication", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaInfo = software.amazon.jsii.Kernel.get(this, "quotaInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appVersion = software.amazon.jsii.Kernel.get(this, "appVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.network = software.amazon.jsii.Kernel.get(this, "network", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateNetwork = software.amazon.jsii.Kernel.get(this, "privateNetwork", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.authentication = java.util.Objects.requireNonNull(builder.authentication, "authentication is required");
            this.quotaInfo = java.util.Objects.requireNonNull(builder.quotaInfo, "quotaInfo is required");
            this.appVersion = builder.appVersion;
            this.description = builder.description;
            this.network = builder.network;
            this.privateNetwork = builder.privateNetwork;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getAuthentication() {
            return this.authentication;
        }

        @Override
        public final java.lang.Object getQuotaInfo() {
            return this.quotaInfo;
        }

        @Override
        public final java.lang.Object getAppVersion() {
            return this.appVersion;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getNetwork() {
            return this.network;
        }

        @Override
        public final java.lang.Object getPrivateNetwork() {
            return this.privateNetwork;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            data.set("authentication", om.valueToTree(this.getAuthentication()));
            data.set("quotaInfo", om.valueToTree(this.getQuotaInfo()));
            if (this.getAppVersion() != null) {
                data.set("appVersion", om.valueToTree(this.getAppVersion()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetwork() != null) {
                data.set("network", om.valueToTree(this.getNetwork()));
            }
            if (this.getPrivateNetwork() != null) {
                data.set("privateNetwork", om.valueToTree(this.getPrivateNetwork()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.AppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AppProps.Jsii$Proxy that = (AppProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (!authentication.equals(that.authentication)) return false;
            if (!quotaInfo.equals(that.quotaInfo)) return false;
            if (this.appVersion != null ? !this.appVersion.equals(that.appVersion) : that.appVersion != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.network != null ? !this.network.equals(that.network) : that.network != null) return false;
            return this.privateNetwork != null ? this.privateNetwork.equals(that.privateNetwork) : that.privateNetwork == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.authentication.hashCode());
            result = 31 * result + (this.quotaInfo.hashCode());
            result = 31 * result + (this.appVersion != null ? this.appVersion.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.network != null ? this.network.hashCode() : 0);
            result = 31 * result + (this.privateNetwork != null ? this.privateNetwork.hashCode() : 0);
            return result;
        }
    }
}
