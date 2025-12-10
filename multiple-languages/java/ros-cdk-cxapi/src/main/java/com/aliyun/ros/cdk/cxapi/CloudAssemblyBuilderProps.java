package com.aliyun.ros.cdk.cxapi;

/**
 * Construction properties for CloudAssemblyBuilder.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.643Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.CloudAssemblyBuilderProps")
@software.amazon.jsii.Jsii.Proxy(CloudAssemblyBuilderProps.Jsii$Proxy.class)
public interface CloudAssemblyBuilderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Use the given asset output directory.
     * <p>
     * Default: - Same as the manifest outdir
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAssetOutdir() {
        return null;
    }

    /**
     * If this builder is for a nested assembly, the parent assembly builder.
     * <p>
     * Default: - This is a root assembly
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder getParentBuilder() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CloudAssemblyBuilderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CloudAssemblyBuilderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CloudAssemblyBuilderProps> {
        java.lang.String assetOutdir;
        com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder parentBuilder;

        /**
         * Sets the value of {@link CloudAssemblyBuilderProps#getAssetOutdir}
         * @param assetOutdir Use the given asset output directory.
         * @return {@code this}
         */
        public Builder assetOutdir(java.lang.String assetOutdir) {
            this.assetOutdir = assetOutdir;
            return this;
        }

        /**
         * Sets the value of {@link CloudAssemblyBuilderProps#getParentBuilder}
         * @param parentBuilder If this builder is for a nested assembly, the parent assembly builder.
         * @return {@code this}
         */
        public Builder parentBuilder(com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder parentBuilder) {
            this.parentBuilder = parentBuilder;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CloudAssemblyBuilderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CloudAssemblyBuilderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CloudAssemblyBuilderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CloudAssemblyBuilderProps {
        private final java.lang.String assetOutdir;
        private final com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder parentBuilder;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.assetOutdir = software.amazon.jsii.Kernel.get(this, "assetOutdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.parentBuilder = software.amazon.jsii.Kernel.get(this, "parentBuilder", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.assetOutdir = builder.assetOutdir;
            this.parentBuilder = builder.parentBuilder;
        }

        @Override
        public final java.lang.String getAssetOutdir() {
            return this.assetOutdir;
        }

        @Override
        public final com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder getParentBuilder() {
            return this.parentBuilder;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAssetOutdir() != null) {
                data.set("assetOutdir", om.valueToTree(this.getAssetOutdir()));
            }
            if (this.getParentBuilder() != null) {
                data.set("parentBuilder", om.valueToTree(this.getParentBuilder()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.CloudAssemblyBuilderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CloudAssemblyBuilderProps.Jsii$Proxy that = (CloudAssemblyBuilderProps.Jsii$Proxy) o;

            if (this.assetOutdir != null ? !this.assetOutdir.equals(that.assetOutdir) : that.assetOutdir != null) return false;
            return this.parentBuilder != null ? this.parentBuilder.equals(that.parentBuilder) : that.parentBuilder == null;
        }

        @Override
        public final int hashCode() {
            int result = this.assetOutdir != null ? this.assetOutdir.hashCode() : 0;
            result = 31 * result + (this.parentBuilder != null ? this.parentBuilder.hashCode() : 0);
            return result;
        }
    }
}
