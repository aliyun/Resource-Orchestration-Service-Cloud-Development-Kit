package com.aliyun.ros.cdk.mps;

/**
 * Properties for defining a <code>RosMediaWorkflow</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.094Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.RosMediaWorkflowProps")
@software.amazon.jsii.Jsii.Proxy(RosMediaWorkflowProps.Jsii$Proxy.class)
public interface RosMediaWorkflowProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopology();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTriggerMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMediaWorkflowProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMediaWorkflowProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMediaWorkflowProps> {
        java.lang.Object name;
        java.lang.Object topology;
        java.lang.Object triggerMode;

        /**
         * Sets the value of {@link RosMediaWorkflowProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaWorkflowProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaWorkflowProps#getTopology}
         * @param topology the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topology(com.aliyun.ros.cdk.core.IResolvable topology) {
            this.topology = topology;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaWorkflowProps#getTopology}
         * @param topology the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topology(java.util.Map<java.lang.String, ? extends java.lang.Object> topology) {
            this.topology = topology;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaWorkflowProps#getTriggerMode}
         * @param triggerMode the value to be set.
         * @return {@code this}
         */
        public Builder triggerMode(java.lang.String triggerMode) {
            this.triggerMode = triggerMode;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaWorkflowProps#getTriggerMode}
         * @param triggerMode the value to be set.
         * @return {@code this}
         */
        public Builder triggerMode(com.aliyun.ros.cdk.core.IResolvable triggerMode) {
            this.triggerMode = triggerMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMediaWorkflowProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMediaWorkflowProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMediaWorkflowProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMediaWorkflowProps {
        private final java.lang.Object name;
        private final java.lang.Object topology;
        private final java.lang.Object triggerMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topology = software.amazon.jsii.Kernel.get(this, "topology", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggerMode = software.amazon.jsii.Kernel.get(this, "triggerMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.topology = java.util.Objects.requireNonNull(builder.topology, "topology is required");
            this.triggerMode = builder.triggerMode;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getTopology() {
            return this.topology;
        }

        @Override
        public final java.lang.Object getTriggerMode() {
            return this.triggerMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("topology", om.valueToTree(this.getTopology()));
            if (this.getTriggerMode() != null) {
                data.set("triggerMode", om.valueToTree(this.getTriggerMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mps.RosMediaWorkflowProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMediaWorkflowProps.Jsii$Proxy that = (RosMediaWorkflowProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!topology.equals(that.topology)) return false;
            return this.triggerMode != null ? this.triggerMode.equals(that.triggerMode) : that.triggerMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.topology.hashCode());
            result = 31 * result + (this.triggerMode != null ? this.triggerMode.hashCode() : 0);
            return result;
        }
    }
}
