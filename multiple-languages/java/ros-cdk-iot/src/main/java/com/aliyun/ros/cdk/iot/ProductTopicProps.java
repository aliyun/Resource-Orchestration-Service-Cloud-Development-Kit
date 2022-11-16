package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a `ALIYUN::IOT::ProductTopic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:10.284Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.ProductTopicProps")
@software.amazon.jsii.Jsii.Proxy(ProductTopicProps.Jsii$Proxy.class)
public interface ProductTopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property operation: Operation permissions of devices on the topic category.
     * <p>
     * Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOperation();

    /**
     * Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductKey();

    /**
     * Property topicShortName: The custom category hierarchy in the topic category.
     * <p>
     * By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicShortName();

    /**
     * Property desc: The description of the topic category.
     * <p>
     * You can enter a description with up to 100 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesc() {
        return null;
    }

    /**
     * Property iotInstanceId: Instance ID you purchased.
     * <p>
     * Public instances do not need pass this property.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ProductTopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProductTopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProductTopicProps> {
        java.lang.Object operation;
        java.lang.Object productKey;
        java.lang.Object topicShortName;
        java.lang.Object desc;
        java.lang.Object iotInstanceId;

        /**
         * Sets the value of {@link ProductTopicProps#getOperation}
         * @param operation Property operation: Operation permissions of devices on the topic category. This parameter is required.
         *                  Value options:
         *                  SUB: Subscribe. Devices can subscribe to the topics of this category.
         *                  PUB: Publish. Devices can publish messages using the topics of this category.
         *                  ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
         * @return {@code this}
         */
        public Builder operation(java.lang.String operation) {
            this.operation = operation;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getOperation}
         * @param operation Property operation: Operation permissions of devices on the topic category. This parameter is required.
         *                  Value options:
         *                  SUB: Subscribe. Devices can subscribe to the topics of this category.
         *                  PUB: Publish. Devices can publish messages using the topics of this category.
         *                  ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
         * @return {@code this}
         */
        public Builder operation(com.aliyun.ros.cdk.core.IResolvable operation) {
            this.operation = operation;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getProductKey}
         * @param productKey Property productKey: The unique identifier of the product for which you want to create a topic category. This parameter is required.
         * @return {@code this}
         */
        public Builder productKey(java.lang.String productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getProductKey}
         * @param productKey Property productKey: The unique identifier of the product for which you want to create a topic category. This parameter is required.
         * @return {@code this}
         */
        public Builder productKey(com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getTopicShortName}
         * @param topicShortName Property topicShortName: The custom category hierarchy in the topic category. This parameter is required.
         *                       By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
         *                       Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
         * @return {@code this}
         */
        public Builder topicShortName(java.lang.String topicShortName) {
            this.topicShortName = topicShortName;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getTopicShortName}
         * @param topicShortName Property topicShortName: The custom category hierarchy in the topic category. This parameter is required.
         *                       By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
         *                       Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
         * @return {@code this}
         */
        public Builder topicShortName(com.aliyun.ros.cdk.core.IResolvable topicShortName) {
            this.topicShortName = topicShortName;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getDesc}
         * @param desc Property desc: The description of the topic category.
         *             You can enter a description with up to 100 characters.
         * @return {@code this}
         */
        public Builder desc(java.lang.String desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getDesc}
         * @param desc Property desc: The description of the topic category.
         *             You can enter a description with up to 100 characters.
         * @return {@code this}
         */
        public Builder desc(com.aliyun.ros.cdk.core.IResolvable desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Instance ID you purchased.
         *                      Public instances do not need pass this property.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ProductTopicProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Instance ID you purchased.
         *                      Public instances do not need pass this property.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProductTopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProductTopicProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ProductTopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProductTopicProps {
        private final java.lang.Object operation;
        private final java.lang.Object productKey;
        private final java.lang.Object topicShortName;
        private final java.lang.Object desc;
        private final java.lang.Object iotInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.operation = software.amazon.jsii.Kernel.get(this, "operation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productKey = software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicShortName = software.amazon.jsii.Kernel.get(this, "topicShortName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desc = software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.operation = java.util.Objects.requireNonNull(builder.operation, "operation is required");
            this.productKey = java.util.Objects.requireNonNull(builder.productKey, "productKey is required");
            this.topicShortName = java.util.Objects.requireNonNull(builder.topicShortName, "topicShortName is required");
            this.desc = builder.desc;
            this.iotInstanceId = builder.iotInstanceId;
        }

        @Override
        public final java.lang.Object getOperation() {
            return this.operation;
        }

        @Override
        public final java.lang.Object getProductKey() {
            return this.productKey;
        }

        @Override
        public final java.lang.Object getTopicShortName() {
            return this.topicShortName;
        }

        @Override
        public final java.lang.Object getDesc() {
            return this.desc;
        }

        @Override
        public final java.lang.Object getIotInstanceId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.ProductTopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProductTopicProps.Jsii$Proxy that = (ProductTopicProps.Jsii$Proxy) o;

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
