package com.aliyun.ros.cdk.assembly.schema;

/**
 * Artifact properties for nested cloud assemblies.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:02.503Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties")
@software.amazon.jsii.Jsii.Proxy(NestedCloudAssemblyProperties.Jsii$Proxy.class)
public interface NestedCloudAssemblyProperties extends software.amazon.jsii.JsiiSerializable {

    /**
     * Relative path to the nested cloud assembly.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDirectoryName();

    /**
     * Display name for the cloud assembly.
     * <p>
     * Default: - The artifact ID
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDisplayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NestedCloudAssemblyProperties}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NestedCloudAssemblyProperties}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NestedCloudAssemblyProperties> {
        java.lang.String directoryName;
        java.lang.String displayName;

        /**
         * Sets the value of {@link NestedCloudAssemblyProperties#getDirectoryName}
         * @param directoryName Relative path to the nested cloud assembly. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryName(java.lang.String directoryName) {
            this.directoryName = directoryName;
            return this;
        }

        /**
         * Sets the value of {@link NestedCloudAssemblyProperties#getDisplayName}
         * @param displayName Display name for the cloud assembly.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NestedCloudAssemblyProperties}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NestedCloudAssemblyProperties build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NestedCloudAssemblyProperties}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NestedCloudAssemblyProperties {
        private final java.lang.String directoryName;
        private final java.lang.String displayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryName = software.amazon.jsii.Kernel.get(this, "directoryName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryName = java.util.Objects.requireNonNull(builder.directoryName, "directoryName is required");
            this.displayName = builder.displayName;
        }

        @Override
        public final java.lang.String getDirectoryName() {
            return this.directoryName;
        }

        @Override
        public final java.lang.String getDisplayName() {
            return this.displayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("directoryName", om.valueToTree(this.getDirectoryName()));
            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NestedCloudAssemblyProperties.Jsii$Proxy that = (NestedCloudAssemblyProperties.Jsii$Proxy) o;

            if (!directoryName.equals(that.directoryName)) return false;
            return this.displayName != null ? this.displayName.equals(that.displayName) : that.displayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.directoryName.hashCode();
            result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
            return result;
        }
    }
}
