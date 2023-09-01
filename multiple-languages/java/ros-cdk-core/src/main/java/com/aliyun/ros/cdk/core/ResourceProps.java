package com.aliyun.ros.cdk.core;

/**
 * Construction properties for {@link Resource}.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:34.794Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ResourceProps")
@software.amazon.jsii.Jsii.Proxy(ResourceProps.Jsii$Proxy.class)
public interface ResourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * The value passed in by users to the physical name prop of the resource.
     * <p>
     * <ul>
     * <li><code>undefined</code> implies that a physical name will be allocated during deployment.</li>
     * <li>a concrete value implies a specific physical name</li>
     * <li><code>PhysicalName.GENERATE_IF_NEEDED</code> is a marker that indicates that a physical will only be generated
     * by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</li>
     * </ul>
     * <p>
     * Default: - The physical name will be allocated at deployment time
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPhysicalName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceProps> {
        java.lang.String physicalName;

        /**
         * Sets the value of {@link ResourceProps#getPhysicalName}
         * @param physicalName The value passed in by users to the physical name prop of the resource.
         *                     <ul>
         *                     <li><code>undefined</code> implies that a physical name will be allocated during deployment.</li>
         *                     <li>a concrete value implies a specific physical name</li>
         *                     <li><code>PhysicalName.GENERATE_IF_NEEDED</code> is a marker that indicates that a physical will only be generated
         *                     by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder physicalName(java.lang.String physicalName) {
            this.physicalName = physicalName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceProps {
        private final java.lang.String physicalName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.physicalName = software.amazon.jsii.Kernel.get(this, "physicalName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.physicalName = builder.physicalName;
        }

        @Override
        public final java.lang.String getPhysicalName() {
            return this.physicalName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getPhysicalName() != null) {
                data.set("physicalName", om.valueToTree(this.getPhysicalName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.ResourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceProps.Jsii$Proxy that = (ResourceProps.Jsii$Proxy) o;

            return this.physicalName != null ? this.physicalName.equals(that.physicalName) : that.physicalName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.physicalName != null ? this.physicalName.hashCode() : 0;
            return result;
        }
    }
}
