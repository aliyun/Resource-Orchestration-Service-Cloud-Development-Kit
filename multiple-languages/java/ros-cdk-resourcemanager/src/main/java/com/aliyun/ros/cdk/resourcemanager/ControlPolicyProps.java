package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>ALIYUN::ResourceManager::ControlPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.939Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.ControlPolicyProps")
@software.amazon.jsii.Jsii.Proxy(ControlPolicyProps.Jsii$Proxy.class)
public interface ControlPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property controlPolicyName: PolicyName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getControlPolicyName();

    /**
     * Property effectScope: EffectScope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEffectScope();

    /**
     * Property policyDocument: PolicyDocument.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyDocument();

    /**
     * Property description: Description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ControlPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ControlPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ControlPolicyProps> {
        java.lang.Object controlPolicyName;
        java.lang.Object effectScope;
        java.lang.Object policyDocument;
        java.lang.Object description;

        /**
         * Sets the value of {@link ControlPolicyProps#getControlPolicyName}
         * @param controlPolicyName Property controlPolicyName: PolicyName. This parameter is required.
         * @return {@code this}
         */
        public Builder controlPolicyName(java.lang.String controlPolicyName) {
            this.controlPolicyName = controlPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getControlPolicyName}
         * @param controlPolicyName Property controlPolicyName: PolicyName. This parameter is required.
         * @return {@code this}
         */
        public Builder controlPolicyName(com.aliyun.ros.cdk.core.IResolvable controlPolicyName) {
            this.controlPolicyName = controlPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getEffectScope}
         * @param effectScope Property effectScope: EffectScope. This parameter is required.
         * @return {@code this}
         */
        public Builder effectScope(java.lang.String effectScope) {
            this.effectScope = effectScope;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getEffectScope}
         * @param effectScope Property effectScope: EffectScope. This parameter is required.
         * @return {@code this}
         */
        public Builder effectScope(com.aliyun.ros.cdk.core.IResolvable effectScope) {
            this.effectScope = effectScope;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getPolicyDocument}
         * @param policyDocument Property policyDocument: PolicyDocument. This parameter is required.
         * @return {@code this}
         */
        public Builder policyDocument(java.lang.String policyDocument) {
            this.policyDocument = policyDocument;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getPolicyDocument}
         * @param policyDocument Property policyDocument: PolicyDocument. This parameter is required.
         * @return {@code this}
         */
        public Builder policyDocument(com.aliyun.ros.cdk.core.IResolvable policyDocument) {
            this.policyDocument = policyDocument;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDescription}
         * @param description Property description: Description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDescription}
         * @param description Property description: Description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ControlPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ControlPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ControlPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ControlPolicyProps {
        private final java.lang.Object controlPolicyName;
        private final java.lang.Object effectScope;
        private final java.lang.Object policyDocument;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.controlPolicyName = software.amazon.jsii.Kernel.get(this, "controlPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectScope = software.amazon.jsii.Kernel.get(this, "effectScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyDocument = software.amazon.jsii.Kernel.get(this, "policyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.controlPolicyName = java.util.Objects.requireNonNull(builder.controlPolicyName, "controlPolicyName is required");
            this.effectScope = java.util.Objects.requireNonNull(builder.effectScope, "effectScope is required");
            this.policyDocument = java.util.Objects.requireNonNull(builder.policyDocument, "policyDocument is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getControlPolicyName() {
            return this.controlPolicyName;
        }

        @Override
        public final java.lang.Object getEffectScope() {
            return this.effectScope;
        }

        @Override
        public final java.lang.Object getPolicyDocument() {
            return this.policyDocument;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("controlPolicyName", om.valueToTree(this.getControlPolicyName()));
            data.set("effectScope", om.valueToTree(this.getEffectScope()));
            data.set("policyDocument", om.valueToTree(this.getPolicyDocument()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.ControlPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ControlPolicyProps.Jsii$Proxy that = (ControlPolicyProps.Jsii$Proxy) o;

            if (!controlPolicyName.equals(that.controlPolicyName)) return false;
            if (!effectScope.equals(that.effectScope)) return false;
            if (!policyDocument.equals(that.policyDocument)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.controlPolicyName.hashCode();
            result = 31 * result + (this.effectScope.hashCode());
            result = 31 * result + (this.policyDocument.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
