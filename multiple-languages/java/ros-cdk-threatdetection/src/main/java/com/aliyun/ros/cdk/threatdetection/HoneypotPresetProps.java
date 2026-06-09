package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>HoneypotPreset</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.475Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.HoneypotPresetProps")
@software.amazon.jsii.Jsii.Proxy(HoneypotPresetProps.Jsii$Proxy.class)
public interface HoneypotPresetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property honeypotImageName: The name of the honeypot image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotImageName();

    /**
     * Property meta: The custom configurations of the honeypot template.
     * <p>
     * The value is a JSON string that contains the following fields:
     * <p>
     * <ul>
     * <li><strong>PortraitOption</strong>: Social Source Tracing</li>
     * <li><strong>Burp</strong>: Burp-specific Defense</li>
     * <li><strong>TrojanGit</strong>: Git-specific Defense.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMeta();

    /**
     * Property nodeId: The ID of the management node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeId();

    /**
     * Property presetName: The custom name of the honeypot template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPresetName();

    /**
     * @return a {@link Builder} of {@link HoneypotPresetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HoneypotPresetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HoneypotPresetProps> {
        java.lang.Object honeypotImageName;
        java.lang.Object meta;
        java.lang.Object nodeId;
        java.lang.Object presetName;

        /**
         * Sets the value of {@link HoneypotPresetProps#getHoneypotImageName}
         * @param honeypotImageName Property honeypotImageName: The name of the honeypot image. This parameter is required.
         * @return {@code this}
         */
        public Builder honeypotImageName(java.lang.String honeypotImageName) {
            this.honeypotImageName = honeypotImageName;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotPresetProps#getHoneypotImageName}
         * @param honeypotImageName Property honeypotImageName: The name of the honeypot image. This parameter is required.
         * @return {@code this}
         */
        public Builder honeypotImageName(com.aliyun.ros.cdk.core.IResolvable honeypotImageName) {
            this.honeypotImageName = honeypotImageName;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotPresetProps#getMeta}
         * @param meta Property meta: The custom configurations of the honeypot template. This parameter is required.
         *             The value is a JSON string that contains the following fields:
         *             <p>
         *             <ul>
         *             <li><strong>PortraitOption</strong>: Social Source Tracing</li>
         *             <li><strong>Burp</strong>: Burp-specific Defense</li>
         *             <li><strong>TrojanGit</strong>: Git-specific Defense.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder meta(com.aliyun.ros.cdk.core.IResolvable meta) {
            this.meta = meta;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotPresetProps#getMeta}
         * @param meta Property meta: The custom configurations of the honeypot template. This parameter is required.
         *             The value is a JSON string that contains the following fields:
         *             <p>
         *             <ul>
         *             <li><strong>PortraitOption</strong>: Social Source Tracing</li>
         *             <li><strong>Burp</strong>: Burp-specific Defense</li>
         *             <li><strong>TrojanGit</strong>: Git-specific Defense.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder meta(com.aliyun.ros.cdk.threatdetection.RosHoneypotPreset.MetaProperty meta) {
            this.meta = meta;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotPresetProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the management node. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeId(java.lang.String nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotPresetProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the management node. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeId(com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotPresetProps#getPresetName}
         * @param presetName Property presetName: The custom name of the honeypot template. This parameter is required.
         * @return {@code this}
         */
        public Builder presetName(java.lang.String presetName) {
            this.presetName = presetName;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotPresetProps#getPresetName}
         * @param presetName Property presetName: The custom name of the honeypot template. This parameter is required.
         * @return {@code this}
         */
        public Builder presetName(com.aliyun.ros.cdk.core.IResolvable presetName) {
            this.presetName = presetName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HoneypotPresetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HoneypotPresetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HoneypotPresetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HoneypotPresetProps {
        private final java.lang.Object honeypotImageName;
        private final java.lang.Object meta;
        private final java.lang.Object nodeId;
        private final java.lang.Object presetName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.honeypotImageName = software.amazon.jsii.Kernel.get(this, "honeypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.meta = software.amazon.jsii.Kernel.get(this, "meta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeId = software.amazon.jsii.Kernel.get(this, "nodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.presetName = software.amazon.jsii.Kernel.get(this, "presetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.honeypotImageName = java.util.Objects.requireNonNull(builder.honeypotImageName, "honeypotImageName is required");
            this.meta = java.util.Objects.requireNonNull(builder.meta, "meta is required");
            this.nodeId = java.util.Objects.requireNonNull(builder.nodeId, "nodeId is required");
            this.presetName = java.util.Objects.requireNonNull(builder.presetName, "presetName is required");
        }

        @Override
        public final java.lang.Object getHoneypotImageName() {
            return this.honeypotImageName;
        }

        @Override
        public final java.lang.Object getMeta() {
            return this.meta;
        }

        @Override
        public final java.lang.Object getNodeId() {
            return this.nodeId;
        }

        @Override
        public final java.lang.Object getPresetName() {
            return this.presetName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("honeypotImageName", om.valueToTree(this.getHoneypotImageName()));
            data.set("meta", om.valueToTree(this.getMeta()));
            data.set("nodeId", om.valueToTree(this.getNodeId()));
            data.set("presetName", om.valueToTree(this.getPresetName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.HoneypotPresetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HoneypotPresetProps.Jsii$Proxy that = (HoneypotPresetProps.Jsii$Proxy) o;

            if (!honeypotImageName.equals(that.honeypotImageName)) return false;
            if (!meta.equals(that.meta)) return false;
            if (!nodeId.equals(that.nodeId)) return false;
            return this.presetName.equals(that.presetName);
        }

        @Override
        public final int hashCode() {
            int result = this.honeypotImageName.hashCode();
            result = 31 * result + (this.meta.hashCode());
            result = 31 * result + (this.nodeId.hashCode());
            result = 31 * result + (this.presetName.hashCode());
            return result;
        }
    }
}
