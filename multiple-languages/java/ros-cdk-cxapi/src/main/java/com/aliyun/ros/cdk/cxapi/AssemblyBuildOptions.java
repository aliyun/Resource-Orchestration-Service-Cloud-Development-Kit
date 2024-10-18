package com.aliyun.ros.cdk.cxapi;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:25.986Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.AssemblyBuildOptions")
@software.amazon.jsii.Jsii.Proxy(AssemblyBuildOptions.Jsii$Proxy.class)
public interface AssemblyBuildOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Include the specified runtime information (module versions) in manifest.
     * <p>
     * Default: - if this option is not specified, runtime info will not be included
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cxapi.RuntimeInfo getRuntimeInfo() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AssemblyBuildOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AssemblyBuildOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AssemblyBuildOptions> {
        com.aliyun.ros.cdk.cxapi.RuntimeInfo runtimeInfo;

        /**
         * Sets the value of {@link AssemblyBuildOptions#getRuntimeInfo}
         * @param runtimeInfo Include the specified runtime information (module versions) in manifest.
         * @return {@code this}
         */
        public Builder runtimeInfo(com.aliyun.ros.cdk.cxapi.RuntimeInfo runtimeInfo) {
            this.runtimeInfo = runtimeInfo;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AssemblyBuildOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AssemblyBuildOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AssemblyBuildOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssemblyBuildOptions {
        private final com.aliyun.ros.cdk.cxapi.RuntimeInfo runtimeInfo;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.runtimeInfo = software.amazon.jsii.Kernel.get(this, "runtimeInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.RuntimeInfo.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.runtimeInfo = builder.runtimeInfo;
        }

        @Override
        public final com.aliyun.ros.cdk.cxapi.RuntimeInfo getRuntimeInfo() {
            return this.runtimeInfo;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRuntimeInfo() != null) {
                data.set("runtimeInfo", om.valueToTree(this.getRuntimeInfo()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.AssemblyBuildOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AssemblyBuildOptions.Jsii$Proxy that = (AssemblyBuildOptions.Jsii$Proxy) o;

            return this.runtimeInfo != null ? this.runtimeInfo.equals(that.runtimeInfo) : that.runtimeInfo == null;
        }

        @Override
        public final int hashCode() {
            int result = this.runtimeInfo != null ? this.runtimeInfo.hashCode() : 0;
            return result;
        }
    }
}
