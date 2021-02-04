package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a `ALIYUN::GA::Listener`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.999Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.ListenerProps")
@software.amazon.jsii.Jsii.Proxy(ListenerProps.Jsii$Proxy.class)
public interface ListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPortRanges();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getClientAffinity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ListenerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ListenerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ListenerProps> {
        private java.lang.String acceleratorId;
        private java.lang.Object portRanges;
        private java.lang.String protocol;
        private java.lang.String clientAffinity;
        private java.lang.String description;
        private java.lang.String name;

        /**
         * Sets the value of {@link ListenerProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPortRanges}
         * @param portRanges the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portRanges(com.aliyun.ros.cdk.core.IResolvable portRanges) {
            this.portRanges = portRanges;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPortRanges}
         * @param portRanges the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portRanges(java.util.List<? extends java.lang.Object> portRanges) {
            this.portRanges = portRanges;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getClientAffinity}
         * @param clientAffinity the value to be set.
         * @return {@code this}
         */
        public Builder clientAffinity(java.lang.String clientAffinity) {
            this.clientAffinity = clientAffinity;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ListenerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ListenerProps build() {
            return new Jsii$Proxy(acceleratorId, portRanges, protocol, clientAffinity, description, name);
        }
    }

    /**
     * An implementation for {@link ListenerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ListenerProps {
        private final java.lang.String acceleratorId;
        private final java.lang.Object portRanges;
        private final java.lang.String protocol;
        private final java.lang.String clientAffinity;
        private final java.lang.String description;
        private final java.lang.String name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.portRanges = software.amazon.jsii.Kernel.get(this, "portRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.clientAffinity = software.amazon.jsii.Kernel.get(this, "clientAffinity", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String acceleratorId, final java.lang.Object portRanges, final java.lang.String protocol, final java.lang.String clientAffinity, final java.lang.String description, final java.lang.String name) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(acceleratorId, "acceleratorId is required");
            this.portRanges = java.util.Objects.requireNonNull(portRanges, "portRanges is required");
            this.protocol = java.util.Objects.requireNonNull(protocol, "protocol is required");
            this.clientAffinity = clientAffinity;
            this.description = description;
            this.name = name;
        }

        @Override
        public final java.lang.String getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getPortRanges() {
            return this.portRanges;
        }

        @Override
        public final java.lang.String getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.String getClientAffinity() {
            return this.clientAffinity;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("portRanges", om.valueToTree(this.getPortRanges()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getClientAffinity() != null) {
                data.set("clientAffinity", om.valueToTree(this.getClientAffinity()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.ListenerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ListenerProps.Jsii$Proxy that = (ListenerProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!portRanges.equals(that.portRanges)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.clientAffinity != null ? !this.clientAffinity.equals(that.clientAffinity) : that.clientAffinity != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.portRanges.hashCode());
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.clientAffinity != null ? this.clientAffinity.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
