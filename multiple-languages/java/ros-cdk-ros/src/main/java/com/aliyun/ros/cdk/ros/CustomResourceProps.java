package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>ALIYUN::ROS::CustomResource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.206Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.CustomResourceProps")
@software.amazon.jsii.Jsii.Proxy(CustomResourceProps.Jsii$Proxy.class)
public interface CustomResourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * <p>
     * Allowed values:
     * <p>
     * <ul>
     * <li>Function Compute: acs:fc:&lt;region_id&gt;:&lt;account_id&gt;:services/&lt;service_name&gt;/functions/&lt;function_name&gt;</li>
     * <li>MNS Queue: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:queues/&lt;queue_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/queues/&lt;queue_name&gt;</li>
     * <li>MNS Topic: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:topics/&lt;topic_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/topics/&lt;topic_name&gt;</li>
     * <li>HTTP&amp;HTTPS: web[options]:<url>
     * Two options are supported:
     * <p>
     * <ul>
     * <li>sync: sync HTTP&amp;HTTPS request.</li>
     * <li>idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:</li>
     * <li>acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function</li>
     * <li>acs:mns:cn-hangzhou:123456789:queues/test-queue</li>
     * <li>acs:mns:cn-hangzhou:123456789:/queues/test-queue</li>
     * <li>acs:mns:cn-hangzhou:123456789:topics/test-topic</li>
     * <li>acs:mns:cn-hangzhou:123456789:/topics/test-topic</li>
     * <li>web:https://abc.com</li>
     * <li>web[sync]:http://abc.com</li>
     * <li>web[sync,idempotent]:https://abc.com</li>
     * </ul></li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceToken();

    /**
     * Property timeout: Timeout seconds before service provider responses.
     * <p>
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeout();

    /**
     * Property httpConfig: Config for HTTP&amp;HTTPS service provider.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpConfig() {
        return null;
    }

    /**
     * Property parameters: Parameters to be passed to service provider.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomResourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomResourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomResourceProps> {
        java.lang.Object serviceToken;
        java.lang.Object timeout;
        java.lang.Object httpConfig;
        java.lang.Object parameters;

        /**
         * Sets the value of {@link CustomResourceProps#getServiceToken}
         * @param serviceToken Property serviceToken: The service token that was given to the template developer by the service provider to access the service. This parameter is required.
         *                     Allowed values:
         *                     <p>
         *                     <ul>
         *                     <li>Function Compute: acs:fc:&lt;region_id&gt;:&lt;account_id&gt;:services/&lt;service_name&gt;/functions/&lt;function_name&gt;</li>
         *                     <li>MNS Queue: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:queues/&lt;queue_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/queues/&lt;queue_name&gt;</li>
         *                     <li>MNS Topic: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:topics/&lt;topic_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/topics/&lt;topic_name&gt;</li>
         *                     <li>HTTP&amp;HTTPS: web[options]:<url>
         *                     Two options are supported:
         *                     <p>
         *                     <ul>
         *                     <li>sync: sync HTTP&amp;HTTPS request.</li>
         *                     <li>idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
         *                     Examples:</li>
         *                     <li>acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:queues/test-queue</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:/queues/test-queue</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:topics/test-topic</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:/topics/test-topic</li>
         *                     <li>web:https://abc.com</li>
         *                     <li>web[sync]:http://abc.com</li>
         *                     <li>web[sync,idempotent]:https://abc.com</li>
         *                     </ul></li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder serviceToken(java.lang.String serviceToken) {
            this.serviceToken = serviceToken;
            return this;
        }

        /**
         * Sets the value of {@link CustomResourceProps#getServiceToken}
         * @param serviceToken Property serviceToken: The service token that was given to the template developer by the service provider to access the service. This parameter is required.
         *                     Allowed values:
         *                     <p>
         *                     <ul>
         *                     <li>Function Compute: acs:fc:&lt;region_id&gt;:&lt;account_id&gt;:services/&lt;service_name&gt;/functions/&lt;function_name&gt;</li>
         *                     <li>MNS Queue: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:queues/&lt;queue_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/queues/&lt;queue_name&gt;</li>
         *                     <li>MNS Topic: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:topics/&lt;topic_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/topics/&lt;topic_name&gt;</li>
         *                     <li>HTTP&amp;HTTPS: web[options]:<url>
         *                     Two options are supported:
         *                     <p>
         *                     <ul>
         *                     <li>sync: sync HTTP&amp;HTTPS request.</li>
         *                     <li>idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
         *                     Examples:</li>
         *                     <li>acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:queues/test-queue</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:/queues/test-queue</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:topics/test-topic</li>
         *                     <li>acs:mns:cn-hangzhou:123456789:/topics/test-topic</li>
         *                     <li>web:https://abc.com</li>
         *                     <li>web[sync]:http://abc.com</li>
         *                     <li>web[sync,idempotent]:https://abc.com</li>
         *                     </ul></li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder serviceToken(com.aliyun.ros.cdk.core.IResolvable serviceToken) {
            this.serviceToken = serviceToken;
            return this;
        }

        /**
         * Sets the value of {@link CustomResourceProps#getTimeout}
         * @param timeout Property timeout: Timeout seconds before service provider responses. This parameter is required.
         *                It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
         *                Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link CustomResourceProps#getTimeout}
         * @param timeout Property timeout: Timeout seconds before service provider responses. This parameter is required.
         *                It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
         *                Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link CustomResourceProps#getHttpConfig}
         * @param httpConfig Property httpConfig: Config for HTTP&amp;HTTPS service provider.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomResourceProps#getHttpConfig}
         * @param httpConfig Property httpConfig: Config for HTTP&amp;HTTPS service provider.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.ros.RosCustomResource.HttpConfigProperty httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomResourceProps#getParameters}
         * @param parameters Property parameters: Parameters to be passed to service provider.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link CustomResourceProps#getParameters}
         * @param parameters Property parameters: Parameters to be passed to service provider.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomResourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomResourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomResourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomResourceProps {
        private final java.lang.Object serviceToken;
        private final java.lang.Object timeout;
        private final java.lang.Object httpConfig;
        private final java.lang.Object parameters;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceToken = software.amazon.jsii.Kernel.get(this, "serviceToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpConfig = software.amazon.jsii.Kernel.get(this, "httpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceToken = java.util.Objects.requireNonNull(builder.serviceToken, "serviceToken is required");
            this.timeout = java.util.Objects.requireNonNull(builder.timeout, "timeout is required");
            this.httpConfig = builder.httpConfig;
            this.parameters = builder.parameters;
        }

        @Override
        public final java.lang.Object getServiceToken() {
            return this.serviceToken;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getHttpConfig() {
            return this.httpConfig;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serviceToken", om.valueToTree(this.getServiceToken()));
            data.set("timeout", om.valueToTree(this.getTimeout()));
            if (this.getHttpConfig() != null) {
                data.set("httpConfig", om.valueToTree(this.getHttpConfig()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.CustomResourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomResourceProps.Jsii$Proxy that = (CustomResourceProps.Jsii$Proxy) o;

            if (!serviceToken.equals(that.serviceToken)) return false;
            if (!timeout.equals(that.timeout)) return false;
            if (this.httpConfig != null ? !this.httpConfig.equals(that.httpConfig) : that.httpConfig != null) return false;
            return this.parameters != null ? this.parameters.equals(that.parameters) : that.parameters == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serviceToken.hashCode();
            result = 31 * result + (this.timeout.hashCode());
            result = 31 * result + (this.httpConfig != null ? this.httpConfig.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            return result;
        }
    }
}
