package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a <code>RosNetworkRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.889Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.RosNetworkRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosNetworkRuleProps.Jsii$Proxy.class)
public interface RosNetworkRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkRuleName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePrivateIp() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNetworkRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNetworkRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNetworkRuleProps> {
        java.lang.Object networkRuleName;
        java.lang.Object type;
        java.lang.Object description;
        java.lang.Object sourcePrivateIp;

        /**
         * Sets the value of {@link RosNetworkRuleProps#getNetworkRuleName}
         * @param networkRuleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkRuleName(java.lang.String networkRuleName) {
            this.networkRuleName = networkRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkRuleProps#getNetworkRuleName}
         * @param networkRuleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkRuleName(com.aliyun.ros.cdk.core.IResolvable networkRuleName) {
            this.networkRuleName = networkRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkRuleProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkRuleProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkRuleProps#getSourcePrivateIp}
         * @param sourcePrivateIp the value to be set.
         * @return {@code this}
         */
        public Builder sourcePrivateIp(com.aliyun.ros.cdk.core.IResolvable sourcePrivateIp) {
            this.sourcePrivateIp = sourcePrivateIp;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkRuleProps#getSourcePrivateIp}
         * @param sourcePrivateIp the value to be set.
         * @return {@code this}
         */
        public Builder sourcePrivateIp(java.util.List<? extends java.lang.Object> sourcePrivateIp) {
            this.sourcePrivateIp = sourcePrivateIp;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNetworkRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNetworkRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNetworkRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNetworkRuleProps {
        private final java.lang.Object networkRuleName;
        private final java.lang.Object type;
        private final java.lang.Object description;
        private final java.lang.Object sourcePrivateIp;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkRuleName = software.amazon.jsii.Kernel.get(this, "networkRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourcePrivateIp = software.amazon.jsii.Kernel.get(this, "sourcePrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkRuleName = java.util.Objects.requireNonNull(builder.networkRuleName, "networkRuleName is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.description = builder.description;
            this.sourcePrivateIp = builder.sourcePrivateIp;
        }

        @Override
        public final java.lang.Object getNetworkRuleName() {
            return this.networkRuleName;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getSourcePrivateIp() {
            return this.sourcePrivateIp;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkRuleName", om.valueToTree(this.getNetworkRuleName()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSourcePrivateIp() != null) {
                data.set("sourcePrivateIp", om.valueToTree(this.getSourcePrivateIp()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.RosNetworkRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNetworkRuleProps.Jsii$Proxy that = (RosNetworkRuleProps.Jsii$Proxy) o;

            if (!networkRuleName.equals(that.networkRuleName)) return false;
            if (!type.equals(that.type)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.sourcePrivateIp != null ? this.sourcePrivateIp.equals(that.sourcePrivateIp) : that.sourcePrivateIp == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkRuleName.hashCode();
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.sourcePrivateIp != null ? this.sourcePrivateIp.hashCode() : 0);
            return result;
        }
    }
}
