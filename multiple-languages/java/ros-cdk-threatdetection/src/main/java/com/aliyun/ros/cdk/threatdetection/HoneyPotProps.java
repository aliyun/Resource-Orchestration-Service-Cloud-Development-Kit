package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>HoneyPot</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.538Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.HoneyPotProps")
@software.amazon.jsii.Jsii.Proxy(HoneyPotProps.Jsii$Proxy.class)
public interface HoneyPotProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property honeypotImageId: The ID of the honeypot image.
     * <p>
     * <blockquote>
     * <p>
     * You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotImageId();

    /**
     * Property honeypotImageName: The name of the honeypot image.
     * <p>
     * <blockquote>
     * <p>
     * You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotImageName();

    /**
     * Property honeypotName: The custom name of the honeypot.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotName();

    /**
     * Property nodeId: The ID of the management node.
     * <p>
     * <blockquote>
     * <p>
     * You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeId();

    /**
     * Property meta: Honeypot custom configuration.
     * <p>
     * JSON format. Contains the following fields:
     * <p>
     * <ul>
     * <li><strong>trojan_git</strong>:Git counterplan. Value:</li>
     * <li><strong>zip</strong>:Git source package</li>
     * <li><strong>web</strong>:.git directory leak</li>
     * <li><strong>close</strong>: close</li>
     * <li><strong>trojan_git_addr</strong>:Git anti-control connection address</li>
     * <li><strong>Trojan_git.zip</strong>:Git anti-Trojan package</li>
     * <li><strong>burp</strong>:Burp counter. Value:</li>
     * <li><strong>open</strong>: On</li>
     * <li><strong>close</strong>: close</li>
     * <li><strong>portrait_option</strong>: traceability configuration. Value:</li>
     * <li><strong>false</strong>: Disabled</li>
     * <li><strong>true</strong>: Enable.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMeta() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HoneyPotProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HoneyPotProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HoneyPotProps> {
        java.lang.Object honeypotImageId;
        java.lang.Object honeypotImageName;
        java.lang.Object honeypotName;
        java.lang.Object nodeId;
        java.lang.Object meta;

        /**
         * Sets the value of {@link HoneyPotProps#getHoneypotImageId}
         * @param honeypotImageId Property honeypotImageId: The ID of the honeypot image. This parameter is required.
         *                        <blockquote>
         *                        <p>
         *                        You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder honeypotImageId(java.lang.String honeypotImageId) {
            this.honeypotImageId = honeypotImageId;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getHoneypotImageId}
         * @param honeypotImageId Property honeypotImageId: The ID of the honeypot image. This parameter is required.
         *                        <blockquote>
         *                        <p>
         *                        You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder honeypotImageId(com.aliyun.ros.cdk.core.IResolvable honeypotImageId) {
            this.honeypotImageId = honeypotImageId;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getHoneypotImageName}
         * @param honeypotImageName Property honeypotImageName: The name of the honeypot image. This parameter is required.
         *                          <blockquote>
         *                          <p>
         *                          You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder honeypotImageName(java.lang.String honeypotImageName) {
            this.honeypotImageName = honeypotImageName;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getHoneypotImageName}
         * @param honeypotImageName Property honeypotImageName: The name of the honeypot image. This parameter is required.
         *                          <blockquote>
         *                          <p>
         *                          You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder honeypotImageName(com.aliyun.ros.cdk.core.IResolvable honeypotImageName) {
            this.honeypotImageName = honeypotImageName;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getHoneypotName}
         * @param honeypotName Property honeypotName: The custom name of the honeypot. This parameter is required.
         * @return {@code this}
         */
        public Builder honeypotName(java.lang.String honeypotName) {
            this.honeypotName = honeypotName;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getHoneypotName}
         * @param honeypotName Property honeypotName: The custom name of the honeypot. This parameter is required.
         * @return {@code this}
         */
        public Builder honeypotName(com.aliyun.ros.cdk.core.IResolvable honeypotName) {
            this.honeypotName = honeypotName;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the management node. This parameter is required.
         *               <blockquote>
         *               <p>
         *               You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder nodeId(java.lang.String nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the management node. This parameter is required.
         *               <blockquote>
         *               <p>
         *               You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder nodeId(com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getMeta}
         * @param meta Property meta: Honeypot custom configuration.
         *             JSON format. Contains the following fields:
         *             <p>
         *             <ul>
         *             <li><strong>trojan_git</strong>:Git counterplan. Value:</li>
         *             <li><strong>zip</strong>:Git source package</li>
         *             <li><strong>web</strong>:.git directory leak</li>
         *             <li><strong>close</strong>: close</li>
         *             <li><strong>trojan_git_addr</strong>:Git anti-control connection address</li>
         *             <li><strong>Trojan_git.zip</strong>:Git anti-Trojan package</li>
         *             <li><strong>burp</strong>:Burp counter. Value:</li>
         *             <li><strong>open</strong>: On</li>
         *             <li><strong>close</strong>: close</li>
         *             <li><strong>portrait_option</strong>: traceability configuration. Value:</li>
         *             <li><strong>false</strong>: Disabled</li>
         *             <li><strong>true</strong>: Enable.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder meta(com.aliyun.ros.cdk.core.IResolvable meta) {
            this.meta = meta;
            return this;
        }

        /**
         * Sets the value of {@link HoneyPotProps#getMeta}
         * @param meta Property meta: Honeypot custom configuration.
         *             JSON format. Contains the following fields:
         *             <p>
         *             <ul>
         *             <li><strong>trojan_git</strong>:Git counterplan. Value:</li>
         *             <li><strong>zip</strong>:Git source package</li>
         *             <li><strong>web</strong>:.git directory leak</li>
         *             <li><strong>close</strong>: close</li>
         *             <li><strong>trojan_git_addr</strong>:Git anti-control connection address</li>
         *             <li><strong>Trojan_git.zip</strong>:Git anti-Trojan package</li>
         *             <li><strong>burp</strong>:Burp counter. Value:</li>
         *             <li><strong>open</strong>: On</li>
         *             <li><strong>close</strong>: close</li>
         *             <li><strong>portrait_option</strong>: traceability configuration. Value:</li>
         *             <li><strong>false</strong>: Disabled</li>
         *             <li><strong>true</strong>: Enable.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder meta(java.util.Map<java.lang.String, ? extends java.lang.Object> meta) {
            this.meta = meta;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HoneyPotProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HoneyPotProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HoneyPotProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HoneyPotProps {
        private final java.lang.Object honeypotImageId;
        private final java.lang.Object honeypotImageName;
        private final java.lang.Object honeypotName;
        private final java.lang.Object nodeId;
        private final java.lang.Object meta;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.honeypotImageId = software.amazon.jsii.Kernel.get(this, "honeypotImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.honeypotImageName = software.amazon.jsii.Kernel.get(this, "honeypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.honeypotName = software.amazon.jsii.Kernel.get(this, "honeypotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeId = software.amazon.jsii.Kernel.get(this, "nodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.meta = software.amazon.jsii.Kernel.get(this, "meta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.honeypotImageId = java.util.Objects.requireNonNull(builder.honeypotImageId, "honeypotImageId is required");
            this.honeypotImageName = java.util.Objects.requireNonNull(builder.honeypotImageName, "honeypotImageName is required");
            this.honeypotName = java.util.Objects.requireNonNull(builder.honeypotName, "honeypotName is required");
            this.nodeId = java.util.Objects.requireNonNull(builder.nodeId, "nodeId is required");
            this.meta = builder.meta;
        }

        @Override
        public final java.lang.Object getHoneypotImageId() {
            return this.honeypotImageId;
        }

        @Override
        public final java.lang.Object getHoneypotImageName() {
            return this.honeypotImageName;
        }

        @Override
        public final java.lang.Object getHoneypotName() {
            return this.honeypotName;
        }

        @Override
        public final java.lang.Object getNodeId() {
            return this.nodeId;
        }

        @Override
        public final java.lang.Object getMeta() {
            return this.meta;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("honeypotImageId", om.valueToTree(this.getHoneypotImageId()));
            data.set("honeypotImageName", om.valueToTree(this.getHoneypotImageName()));
            data.set("honeypotName", om.valueToTree(this.getHoneypotName()));
            data.set("nodeId", om.valueToTree(this.getNodeId()));
            if (this.getMeta() != null) {
                data.set("meta", om.valueToTree(this.getMeta()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.HoneyPotProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HoneyPotProps.Jsii$Proxy that = (HoneyPotProps.Jsii$Proxy) o;

            if (!honeypotImageId.equals(that.honeypotImageId)) return false;
            if (!honeypotImageName.equals(that.honeypotImageName)) return false;
            if (!honeypotName.equals(that.honeypotName)) return false;
            if (!nodeId.equals(that.nodeId)) return false;
            return this.meta != null ? this.meta.equals(that.meta) : that.meta == null;
        }

        @Override
        public final int hashCode() {
            int result = this.honeypotImageId.hashCode();
            result = 31 * result + (this.honeypotImageName.hashCode());
            result = 31 * result + (this.honeypotName.hashCode());
            result = 31 * result + (this.nodeId.hashCode());
            result = 31 * result + (this.meta != null ? this.meta.hashCode() : 0);
            return result;
        }
    }
}
