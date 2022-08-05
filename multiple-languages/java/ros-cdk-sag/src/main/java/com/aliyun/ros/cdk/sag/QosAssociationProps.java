package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::QosAssociation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.512Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.QosAssociationProps")
@software.amazon.jsii.Jsii.Proxy(QosAssociationProps.Jsii$Proxy.class)
public interface QosAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property qosId: The instance ID of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQosId();

    /**
     * Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSmartAgId();

    /**
     * @return a {@link Builder} of {@link QosAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QosAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QosAssociationProps> {
        java.lang.Object qosId;
        java.lang.Object smartAgId;

        /**
         * Sets the value of {@link QosAssociationProps#getQosId}
         * @param qosId Property qosId: The instance ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(java.lang.String qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link QosAssociationProps#getQosId}
         * @param qosId Property qosId: The instance ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link QosAssociationProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(java.lang.String smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link QosAssociationProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QosAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QosAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QosAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QosAssociationProps {
        private final java.lang.Object qosId;
        private final java.lang.Object smartAgId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.qosId = software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartAgId = software.amazon.jsii.Kernel.get(this, "smartAgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.qosId = java.util.Objects.requireNonNull(builder.qosId, "qosId is required");
            this.smartAgId = java.util.Objects.requireNonNull(builder.smartAgId, "smartAgId is required");
        }

        @Override
        public final java.lang.Object getQosId() {
            return this.qosId;
        }

        @Override
        public final java.lang.Object getSmartAgId() {
            return this.smartAgId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("qosId", om.valueToTree(this.getQosId()));
            data.set("smartAgId", om.valueToTree(this.getSmartAgId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.QosAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QosAssociationProps.Jsii$Proxy that = (QosAssociationProps.Jsii$Proxy) o;

            if (!qosId.equals(that.qosId)) return false;
            return this.smartAgId.equals(that.smartAgId);
        }

        @Override
        public final int hashCode() {
            int result = this.qosId.hashCode();
            result = 31 * result + (this.smartAgId.hashCode());
            return result;
        }
    }
}
