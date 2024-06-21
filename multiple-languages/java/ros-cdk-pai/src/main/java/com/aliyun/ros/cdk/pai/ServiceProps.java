package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>Service</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.314Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.ServiceProps")
@software.amazon.jsii.Jsii.Proxy(ServiceProps.Jsii$Proxy.class)
public interface ServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serviceConfig: Service configuration information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceConfig();

    /**
     * Property develop: Whether to enter the development mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDevelop() {
        return null;
    }

    /**
     * Property labels: Service Tag.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServiceProps> {
        java.lang.Object serviceConfig;
        java.lang.Object develop;
        java.lang.Object labels;

        /**
         * Sets the value of {@link ServiceProps#getServiceConfig}
         * @param serviceConfig Property serviceConfig: Service configuration information. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfig(com.aliyun.ros.cdk.core.IResolvable serviceConfig) {
            this.serviceConfig = serviceConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getServiceConfig}
         * @param serviceConfig Property serviceConfig: Service configuration information. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> serviceConfig) {
            this.serviceConfig = serviceConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getDevelop}
         * @param develop Property develop: Whether to enter the development mode.
         * @return {@code this}
         */
        public Builder develop(java.lang.String develop) {
            this.develop = develop;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getDevelop}
         * @param develop Property develop: Whether to enter the development mode.
         * @return {@code this}
         */
        public Builder develop(com.aliyun.ros.cdk.core.IResolvable develop) {
            this.develop = develop;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getLabels}
         * @param labels Property labels: Service Tag.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getLabels}
         * @param labels Property labels: Service Tag.
         * @return {@code this}
         */
        public Builder labels(java.util.Map<java.lang.String, ? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceProps {
        private final java.lang.Object serviceConfig;
        private final java.lang.Object develop;
        private final java.lang.Object labels;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceConfig = software.amazon.jsii.Kernel.get(this, "serviceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.develop = software.amazon.jsii.Kernel.get(this, "develop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceConfig = java.util.Objects.requireNonNull(builder.serviceConfig, "serviceConfig is required");
            this.develop = builder.develop;
            this.labels = builder.labels;
        }

        @Override
        public final java.lang.Object getServiceConfig() {
            return this.serviceConfig;
        }

        @Override
        public final java.lang.Object getDevelop() {
            return this.develop;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serviceConfig", om.valueToTree(this.getServiceConfig()));
            if (this.getDevelop() != null) {
                data.set("develop", om.valueToTree(this.getDevelop()));
            }
            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.ServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServiceProps.Jsii$Proxy that = (ServiceProps.Jsii$Proxy) o;

            if (!serviceConfig.equals(that.serviceConfig)) return false;
            if (this.develop != null ? !this.develop.equals(that.develop) : that.develop != null) return false;
            return this.labels != null ? this.labels.equals(that.labels) : that.labels == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serviceConfig.hashCode();
            result = 31 * result + (this.develop != null ? this.develop.hashCode() : 0);
            result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
            return result;
        }
    }
}
