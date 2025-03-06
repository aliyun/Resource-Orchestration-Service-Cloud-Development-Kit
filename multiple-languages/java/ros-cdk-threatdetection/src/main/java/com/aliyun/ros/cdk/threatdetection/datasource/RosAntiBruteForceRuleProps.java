package com.aliyun.ros.cdk.threatdetection.datasource;

/**
 * Properties for defining a <code>RosAntiBruteForceRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.067Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.datasource.RosAntiBruteForceRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosAntiBruteForceRuleProps.Jsii$Proxy.class)
public interface RosAntiBruteForceRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAntiBruteForceRuleId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAntiBruteForceRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAntiBruteForceRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAntiBruteForceRuleProps> {
        java.lang.Object antiBruteForceRuleId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getAntiBruteForceRuleId}
         * @param antiBruteForceRuleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder antiBruteForceRuleId(java.lang.Number antiBruteForceRuleId) {
            this.antiBruteForceRuleId = antiBruteForceRuleId;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getAntiBruteForceRuleId}
         * @param antiBruteForceRuleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder antiBruteForceRuleId(com.aliyun.ros.cdk.core.IResolvable antiBruteForceRuleId) {
            this.antiBruteForceRuleId = antiBruteForceRuleId;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAntiBruteForceRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAntiBruteForceRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAntiBruteForceRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAntiBruteForceRuleProps {
        private final java.lang.Object antiBruteForceRuleId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.antiBruteForceRuleId = software.amazon.jsii.Kernel.get(this, "antiBruteForceRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.antiBruteForceRuleId = java.util.Objects.requireNonNull(builder.antiBruteForceRuleId, "antiBruteForceRuleId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getAntiBruteForceRuleId() {
            return this.antiBruteForceRuleId;
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

            data.set("antiBruteForceRuleId", om.valueToTree(this.getAntiBruteForceRuleId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.datasource.RosAntiBruteForceRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAntiBruteForceRuleProps.Jsii$Proxy that = (RosAntiBruteForceRuleProps.Jsii$Proxy) o;

            if (!antiBruteForceRuleId.equals(that.antiBruteForceRuleId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.antiBruteForceRuleId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
