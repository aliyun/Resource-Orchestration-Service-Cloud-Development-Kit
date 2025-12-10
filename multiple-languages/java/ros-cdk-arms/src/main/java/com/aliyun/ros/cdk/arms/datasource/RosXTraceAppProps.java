package com.aliyun.ros.cdk.arms.datasource;

/**
 * Properties for defining a <code>RosXTraceApp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.863Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.RosXTraceAppProps")
@software.amazon.jsii.Jsii.Proxy(RosXTraceAppProps.Jsii$Proxy.class)
public interface RosXTraceAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPid();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosXTraceAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosXTraceAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosXTraceAppProps> {
        java.lang.Object pid;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosXTraceAppProps#getPid}
         * @param pid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pid(java.lang.String pid) {
            this.pid = pid;
            return this;
        }

        /**
         * Sets the value of {@link RosXTraceAppProps#getPid}
         * @param pid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pid(com.aliyun.ros.cdk.core.IResolvable pid) {
            this.pid = pid;
            return this;
        }

        /**
         * Sets the value of {@link RosXTraceAppProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosXTraceAppProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosXTraceAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosXTraceAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosXTraceAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosXTraceAppProps {
        private final java.lang.Object pid;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pid = software.amazon.jsii.Kernel.get(this, "pid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pid = java.util.Objects.requireNonNull(builder.pid, "pid is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getPid() {
            return this.pid;
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

            data.set("pid", om.valueToTree(this.getPid()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.datasource.RosXTraceAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosXTraceAppProps.Jsii$Proxy that = (RosXTraceAppProps.Jsii$Proxy) o;

            if (!pid.equals(that.pid)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pid.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
