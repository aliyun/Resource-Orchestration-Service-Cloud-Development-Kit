package com.aliyun.ros.cdk.kms.datasource;

/**
 * Properties for defining a <code>NetworkRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.925Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.datasource.NetworkRuleProps")
@software.amazon.jsii.Jsii.Proxy(NetworkRuleProps.Jsii$Proxy.class)
public interface NetworkRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property networkRuleName: The name of the access control rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkRuleName();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkRuleProps> {
        java.lang.Object networkRuleName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link NetworkRuleProps#getNetworkRuleName}
         * @param networkRuleName Property networkRuleName: The name of the access control rule. This parameter is required.
         * @return {@code this}
         */
        public Builder networkRuleName(java.lang.String networkRuleName) {
            this.networkRuleName = networkRuleName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkRuleProps#getNetworkRuleName}
         * @param networkRuleName Property networkRuleName: The name of the access control rule. This parameter is required.
         * @return {@code this}
         */
        public Builder networkRuleName(com.aliyun.ros.cdk.core.IResolvable networkRuleName) {
            this.networkRuleName = networkRuleName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkRuleProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link NetworkRuleProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkRuleProps {
        private final java.lang.Object networkRuleName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkRuleName = software.amazon.jsii.Kernel.get(this, "networkRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkRuleName = java.util.Objects.requireNonNull(builder.networkRuleName, "networkRuleName is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getNetworkRuleName() {
            return this.networkRuleName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkRuleName", om.valueToTree(this.getNetworkRuleName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.datasource.NetworkRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkRuleProps.Jsii$Proxy that = (NetworkRuleProps.Jsii$Proxy) o;

            if (!networkRuleName.equals(that.networkRuleName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkRuleName.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
