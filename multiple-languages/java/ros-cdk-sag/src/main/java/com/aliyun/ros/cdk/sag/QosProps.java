package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>Qos</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:30.606Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.QosProps")
@software.amazon.jsii.Jsii.Proxy(QosProps.Jsii$Proxy.class)
public interface QosProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property qosName: The name of the QoS policy.
     * <p>
     * The name must be 2 to 100 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQosName();

    /**
     * Property qosDescription: The description of the QoS policy.
     * <p>
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQosDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QosProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QosProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QosProps> {
        java.lang.Object qosName;
        java.lang.Object qosDescription;

        /**
         * Sets the value of {@link QosProps#getQosName}
         * @param qosName Property qosName: The name of the QoS policy. This parameter is required.
         *                The name must be 2 to 100 characters in length and can contain letters, digits, periods
         *                (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder qosName(java.lang.String qosName) {
            this.qosName = qosName;
            return this;
        }

        /**
         * Sets the value of {@link QosProps#getQosName}
         * @param qosName Property qosName: The name of the QoS policy. This parameter is required.
         *                The name must be 2 to 100 characters in length and can contain letters, digits, periods
         *                (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder qosName(com.aliyun.ros.cdk.core.IResolvable qosName) {
            this.qosName = qosName;
            return this;
        }

        /**
         * Sets the value of {@link QosProps#getQosDescription}
         * @param qosDescription Property qosDescription: The description of the QoS policy.
         *                       The description must be 1 to 512 characters in length and can contain letters, digits,
         *                       underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder qosDescription(java.lang.String qosDescription) {
            this.qosDescription = qosDescription;
            return this;
        }

        /**
         * Sets the value of {@link QosProps#getQosDescription}
         * @param qosDescription Property qosDescription: The description of the QoS policy.
         *                       The description must be 1 to 512 characters in length and can contain letters, digits,
         *                       underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder qosDescription(com.aliyun.ros.cdk.core.IResolvable qosDescription) {
            this.qosDescription = qosDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QosProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QosProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QosProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QosProps {
        private final java.lang.Object qosName;
        private final java.lang.Object qosDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.qosName = software.amazon.jsii.Kernel.get(this, "qosName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qosDescription = software.amazon.jsii.Kernel.get(this, "qosDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.qosName = java.util.Objects.requireNonNull(builder.qosName, "qosName is required");
            this.qosDescription = builder.qosDescription;
        }

        @Override
        public final java.lang.Object getQosName() {
            return this.qosName;
        }

        @Override
        public final java.lang.Object getQosDescription() {
            return this.qosDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("qosName", om.valueToTree(this.getQosName()));
            if (this.getQosDescription() != null) {
                data.set("qosDescription", om.valueToTree(this.getQosDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.QosProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QosProps.Jsii$Proxy that = (QosProps.Jsii$Proxy) o;

            if (!qosName.equals(that.qosName)) return false;
            return this.qosDescription != null ? this.qosDescription.equals(that.qosDescription) : that.qosDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.qosName.hashCode();
            result = 31 * result + (this.qosDescription != null ? this.qosDescription.hashCode() : 0);
            return result;
        }
    }
}
