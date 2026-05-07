package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>UserConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.468Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.UserConfigProps")
@software.amazon.jsii.Jsii.Proxy(UserConfigProps.Jsii$Proxy.class)
public interface UserConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property categoryName: Represents a resource attribute for a configuration category.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCategoryName();

    /**
     * Property configKey: Represents the resource attribute of the configuration Key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigKey();

    /**
     * Property configs: Represents a resource property for the configuration list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigs() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UserConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserConfigProps> {
        java.lang.Object categoryName;
        java.lang.Object configKey;
        java.lang.Object configs;

        /**
         * Sets the value of {@link UserConfigProps#getCategoryName}
         * @param categoryName Property categoryName: Represents a resource attribute for a configuration category. This parameter is required.
         * @return {@code this}
         */
        public Builder categoryName(java.lang.String categoryName) {
            this.categoryName = categoryName;
            return this;
        }

        /**
         * Sets the value of {@link UserConfigProps#getCategoryName}
         * @param categoryName Property categoryName: Represents a resource attribute for a configuration category. This parameter is required.
         * @return {@code this}
         */
        public Builder categoryName(com.aliyun.ros.cdk.core.IResolvable categoryName) {
            this.categoryName = categoryName;
            return this;
        }

        /**
         * Sets the value of {@link UserConfigProps#getConfigKey}
         * @param configKey Property configKey: Represents the resource attribute of the configuration Key. This parameter is required.
         * @return {@code this}
         */
        public Builder configKey(java.lang.String configKey) {
            this.configKey = configKey;
            return this;
        }

        /**
         * Sets the value of {@link UserConfigProps#getConfigKey}
         * @param configKey Property configKey: Represents the resource attribute of the configuration Key. This parameter is required.
         * @return {@code this}
         */
        public Builder configKey(com.aliyun.ros.cdk.core.IResolvable configKey) {
            this.configKey = configKey;
            return this;
        }

        /**
         * Sets the value of {@link UserConfigProps#getConfigs}
         * @param configs Property configs: Represents a resource property for the configuration list.
         * @return {@code this}
         */
        public Builder configs(com.aliyun.ros.cdk.core.IResolvable configs) {
            this.configs = configs;
            return this;
        }

        /**
         * Sets the value of {@link UserConfigProps#getConfigs}
         * @param configs Property configs: Represents a resource property for the configuration list.
         * @return {@code this}
         */
        public Builder configs(java.util.List<? extends java.lang.Object> configs) {
            this.configs = configs;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserConfigProps {
        private final java.lang.Object categoryName;
        private final java.lang.Object configKey;
        private final java.lang.Object configs;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.categoryName = software.amazon.jsii.Kernel.get(this, "categoryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configKey = software.amazon.jsii.Kernel.get(this, "configKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configs = software.amazon.jsii.Kernel.get(this, "configs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.categoryName = java.util.Objects.requireNonNull(builder.categoryName, "categoryName is required");
            this.configKey = java.util.Objects.requireNonNull(builder.configKey, "configKey is required");
            this.configs = builder.configs;
        }

        @Override
        public final java.lang.Object getCategoryName() {
            return this.categoryName;
        }

        @Override
        public final java.lang.Object getConfigKey() {
            return this.configKey;
        }

        @Override
        public final java.lang.Object getConfigs() {
            return this.configs;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("categoryName", om.valueToTree(this.getCategoryName()));
            data.set("configKey", om.valueToTree(this.getConfigKey()));
            if (this.getConfigs() != null) {
                data.set("configs", om.valueToTree(this.getConfigs()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.UserConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserConfigProps.Jsii$Proxy that = (UserConfigProps.Jsii$Proxy) o;

            if (!categoryName.equals(that.categoryName)) return false;
            if (!configKey.equals(that.configKey)) return false;
            return this.configs != null ? this.configs.equals(that.configs) : that.configs == null;
        }

        @Override
        public final int hashCode() {
            int result = this.categoryName.hashCode();
            result = 31 * result + (this.configKey.hashCode());
            result = 31 * result + (this.configs != null ? this.configs.hashCode() : 0);
            return result;
        }
    }
}
