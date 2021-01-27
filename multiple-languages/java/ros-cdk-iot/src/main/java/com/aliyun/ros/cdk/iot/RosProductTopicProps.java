package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a `ALIYUN::IOT::ProductTopic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.038Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosProductTopicProps")
@software.amazon.jsii.Jsii.Proxy(RosProductTopicProps.Jsii$Proxy.class)
public interface RosProductTopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOperation();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProductKey();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTopicShortName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIotInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosProductTopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosProductTopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosProductTopicProps> {
        private java.lang.String operation;
        private java.lang.String productKey;
        private java.lang.String topicShortName;
        private java.lang.String desc;
        private java.lang.String iotInstanceId;

        /**
         * Sets the value of {@link RosProductTopicProps#getOperation}
         * @param operation the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder operation(java.lang.String operation) {
            this.operation = operation;
            return this;
        }

        /**
         * Sets the value of {@link RosProductTopicProps#getProductKey}
         * @param productKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productKey(java.lang.String productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link RosProductTopicProps#getTopicShortName}
         * @param topicShortName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicShortName(java.lang.String topicShortName) {
            this.topicShortName = topicShortName;
            return this;
        }

        /**
         * Sets the value of {@link RosProductTopicProps#getDesc}
         * @param desc the value to be set.
         * @return {@code this}
         */
        public Builder desc(java.lang.String desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link RosProductTopicProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosProductTopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosProductTopicProps build() {
            return new Jsii$Proxy(operation, productKey, topicShortName, desc, iotInstanceId);
        }
    }

    /**
     * An implementation for {@link RosProductTopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosProductTopicProps {
        private final java.lang.String operation;
        private final java.lang.String productKey;
        private final java.lang.String topicShortName;
        private final java.lang.String desc;
        private final java.lang.String iotInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.operation = software.amazon.jsii.Kernel.get(this, "operation", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.productKey = software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.topicShortName = software.amazon.jsii.Kernel.get(this, "topicShortName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.desc = software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String operation, final java.lang.String productKey, final java.lang.String topicShortName, final java.lang.String desc, final java.lang.String iotInstanceId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.operation = java.util.Objects.requireNonNull(operation, "operation is required");
            this.productKey = java.util.Objects.requireNonNull(productKey, "productKey is required");
            this.topicShortName = java.util.Objects.requireNonNull(topicShortName, "topicShortName is required");
            this.desc = desc;
            this.iotInstanceId = iotInstanceId;
        }

        @Override
        public final java.lang.String getOperation() {
            return this.operation;
        }

        @Override
        public final java.lang.String getProductKey() {
            return this.productKey;
        }

        @Override
        public final java.lang.String getTopicShortName() {
            return this.topicShortName;
        }

        @Override
        public final java.lang.String getDesc() {
            return this.desc;
        }

        @Override
        public final java.lang.String getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("operation", om.valueToTree(this.getOperation()));
            data.set("productKey", om.valueToTree(this.getProductKey()));
            data.set("topicShortName", om.valueToTree(this.getTopicShortName()));
            if (this.getDesc() != null) {
                data.set("desc", om.valueToTree(this.getDesc()));
            }
            if (this.getIotInstanceId() != null) {
                data.set("iotInstanceId", om.valueToTree(this.getIotInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.RosProductTopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosProductTopicProps.Jsii$Proxy that = (RosProductTopicProps.Jsii$Proxy) o;

            if (!operation.equals(that.operation)) return false;
            if (!productKey.equals(that.productKey)) return false;
            if (!topicShortName.equals(that.topicShortName)) return false;
            if (this.desc != null ? !this.desc.equals(that.desc) : that.desc != null) return false;
            return this.iotInstanceId != null ? this.iotInstanceId.equals(that.iotInstanceId) : that.iotInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.operation.hashCode();
            result = 31 * result + (this.productKey.hashCode());
            result = 31 * result + (this.topicShortName.hashCode());
            result = 31 * result + (this.desc != null ? this.desc.hashCode() : 0);
            result = 31 * result + (this.iotInstanceId != null ? this.iotInstanceId.hashCode() : 0);
            return result;
        }
    }
}
