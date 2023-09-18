package com.aliyun.ros.cdk.cloudphone.datasource;

/**
 * Properties for defining a <code>DATASOURCE::CloudPhone::KeyPairs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.988Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairsProps")
@software.amazon.jsii.Jsii.Proxy(RosKeyPairsProps.Jsii$Proxy.class)
public interface RosKeyPairsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairFingerPrint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosKeyPairsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosKeyPairsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosKeyPairsProps> {
        java.lang.Object keyPairFingerPrint;
        java.lang.Object keyPairName;

        /**
         * Sets the value of {@link RosKeyPairsProps#getKeyPairFingerPrint}
         * @param keyPairFingerPrint the value to be set.
         * @return {@code this}
         */
        public Builder keyPairFingerPrint(java.lang.String keyPairFingerPrint) {
            this.keyPairFingerPrint = keyPairFingerPrint;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyPairsProps#getKeyPairFingerPrint}
         * @param keyPairFingerPrint the value to be set.
         * @return {@code this}
         */
        public Builder keyPairFingerPrint(com.aliyun.ros.cdk.core.IResolvable keyPairFingerPrint) {
            this.keyPairFingerPrint = keyPairFingerPrint;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyPairsProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyPairsProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosKeyPairsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosKeyPairsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosKeyPairsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosKeyPairsProps {
        private final java.lang.Object keyPairFingerPrint;
        private final java.lang.Object keyPairName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.keyPairFingerPrint = software.amazon.jsii.Kernel.get(this, "keyPairFingerPrint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.keyPairFingerPrint = builder.keyPairFingerPrint;
            this.keyPairName = builder.keyPairName;
        }

        @Override
        public final java.lang.Object getKeyPairFingerPrint() {
            return this.keyPairFingerPrint;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getKeyPairFingerPrint() != null) {
                data.set("keyPairFingerPrint", om.valueToTree(this.getKeyPairFingerPrint()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosKeyPairsProps.Jsii$Proxy that = (RosKeyPairsProps.Jsii$Proxy) o;

            if (this.keyPairFingerPrint != null ? !this.keyPairFingerPrint.equals(that.keyPairFingerPrint) : that.keyPairFingerPrint != null) return false;
            return this.keyPairName != null ? this.keyPairName.equals(that.keyPairName) : that.keyPairName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.keyPairFingerPrint != null ? this.keyPairFingerPrint.hashCode() : 0;
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            return result;
        }
    }
}
