package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::App`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.897Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.AppProps")
@software.amazon.jsii.Jsii.Proxy(AppProps.Jsii$Proxy.class)
public interface AppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     * Property description: Description of the App, less than 180 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property tags: Tags to attach to app.
     * <p>
     * Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> getTags() {
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
        java.lang.Object description;
        java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> tags;

        /**
         * Sets the value of {@link AppProps#getAppName}
         * @param appName Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getAppName}
         * @param appName Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getDescription}
         * @param description Property description: Description of the App, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getDescription}
         * @param description Property description: Description of the App, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getTags}
         * @param tags Property tags: Tags to attach to app.
         *             Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty>)tags;
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
        private final java.lang.Object description;
        private final java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.description = builder.description;
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.AppProps"));
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
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
