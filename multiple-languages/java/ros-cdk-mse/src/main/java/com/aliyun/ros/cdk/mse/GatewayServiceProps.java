package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>GatewayService</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.212Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.GatewayServiceProps")
@software.amazon.jsii.Jsii.Proxy(GatewayServiceProps.Jsii$Proxy.class)
public interface GatewayServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property gatewayUniqueId: Unique identifier of the gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId();

    /**
     * Property name: Name of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property sourceType: Type of service source.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>MSE: MSE-NACOS</li>
     * <li>K8s: ACK container service</li>
     * <li>VIP: Fixed address</li>
     * <li>DNS: DNS domain name</li>
     * <li>FC: Function Compute</li>
     * <li>EDAS: EDAS</li>
     * <li>MSE_ZK: MSE-Zookeeper</li>
     * <li>SAE: SAE</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     * Property dnsServerList: List of DNS servers.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsServerList() {
        return null;
    }

    /**
     * Property fcAlias: Function Compute service alias.
     * <p>
     * Used when SourceType is FC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFcAlias() {
        return null;
    }

    /**
     * Property fcServiceName: Function Compute service name.
     * <p>
     * Required when SourceType is FC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFcServiceName() {
        return null;
    }

    /**
     * Property fcVersion: Function Compute service version.
     * <p>
     * Used when SourceType is FC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFcVersion() {
        return null;
    }

    /**
     * Property groupName: Group name of the service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     * Property ips: List of IPs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIps() {
        return null;
    }

    /**
     * Property namespace: Namespace of the service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return null;
    }

    /**
     * Property saeAppId: SAE application ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSaeAppId() {
        return null;
    }

    /**
     * Property servicePort: Port of the service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServicePort() {
        return null;
    }

    /**
     * Property serviceProtocol: Protocol of the service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceProtocol() {
        return null;
    }

    /**
     * Property sourceId: Source ID of the service.
     * <p>
     * Used when specifying a source to add services.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceId() {
        return null;
    }

    /**
     * Property tlsSetting: TLS settings for the service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsSetting() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GatewayServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GatewayServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GatewayServiceProps> {
        java.lang.Object gatewayUniqueId;
        java.lang.Object name;
        java.lang.Object sourceType;
        java.lang.Object dnsServerList;
        java.lang.Object fcAlias;
        java.lang.Object fcServiceName;
        java.lang.Object fcVersion;
        java.lang.Object groupName;
        java.lang.Object ips;
        java.lang.Object namespace;
        java.lang.Object saeAppId;
        java.lang.Object servicePort;
        java.lang.Object serviceProtocol;
        java.lang.Object sourceId;
        java.lang.Object tlsSetting;

        /**
         * Sets the value of {@link GatewayServiceProps#getGatewayUniqueId}
         * @param gatewayUniqueId Property gatewayUniqueId: Unique identifier of the gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(java.lang.String gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getGatewayUniqueId}
         * @param gatewayUniqueId Property gatewayUniqueId: Unique identifier of the gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getName}
         * @param name Property name: Name of the service. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getName}
         * @param name Property name: Name of the service. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getSourceType}
         * @param sourceType Property sourceType: Type of service source. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>MSE: MSE-NACOS</li>
         *                   <li>K8s: ACK container service</li>
         *                   <li>VIP: Fixed address</li>
         *                   <li>DNS: DNS domain name</li>
         *                   <li>FC: Function Compute</li>
         *                   <li>EDAS: EDAS</li>
         *                   <li>MSE_ZK: MSE-Zookeeper</li>
         *                   <li>SAE: SAE</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getSourceType}
         * @param sourceType Property sourceType: Type of service source. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>MSE: MSE-NACOS</li>
         *                   <li>K8s: ACK container service</li>
         *                   <li>VIP: Fixed address</li>
         *                   <li>DNS: DNS domain name</li>
         *                   <li>FC: Function Compute</li>
         *                   <li>EDAS: EDAS</li>
         *                   <li>MSE_ZK: MSE-Zookeeper</li>
         *                   <li>SAE: SAE</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getDnsServerList}
         * @param dnsServerList Property dnsServerList: List of DNS servers.
         * @return {@code this}
         */
        public Builder dnsServerList(com.aliyun.ros.cdk.core.IResolvable dnsServerList) {
            this.dnsServerList = dnsServerList;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getDnsServerList}
         * @param dnsServerList Property dnsServerList: List of DNS servers.
         * @return {@code this}
         */
        public Builder dnsServerList(java.util.List<? extends java.lang.Object> dnsServerList) {
            this.dnsServerList = dnsServerList;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getFcAlias}
         * @param fcAlias Property fcAlias: Function Compute service alias.
         *                Used when SourceType is FC.
         * @return {@code this}
         */
        public Builder fcAlias(java.lang.String fcAlias) {
            this.fcAlias = fcAlias;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getFcAlias}
         * @param fcAlias Property fcAlias: Function Compute service alias.
         *                Used when SourceType is FC.
         * @return {@code this}
         */
        public Builder fcAlias(com.aliyun.ros.cdk.core.IResolvable fcAlias) {
            this.fcAlias = fcAlias;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getFcServiceName}
         * @param fcServiceName Property fcServiceName: Function Compute service name.
         *                      Required when SourceType is FC.
         * @return {@code this}
         */
        public Builder fcServiceName(java.lang.String fcServiceName) {
            this.fcServiceName = fcServiceName;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getFcServiceName}
         * @param fcServiceName Property fcServiceName: Function Compute service name.
         *                      Required when SourceType is FC.
         * @return {@code this}
         */
        public Builder fcServiceName(com.aliyun.ros.cdk.core.IResolvable fcServiceName) {
            this.fcServiceName = fcServiceName;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getFcVersion}
         * @param fcVersion Property fcVersion: Function Compute service version.
         *                  Used when SourceType is FC.
         * @return {@code this}
         */
        public Builder fcVersion(java.lang.String fcVersion) {
            this.fcVersion = fcVersion;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getFcVersion}
         * @param fcVersion Property fcVersion: Function Compute service version.
         *                  Used when SourceType is FC.
         * @return {@code this}
         */
        public Builder fcVersion(com.aliyun.ros.cdk.core.IResolvable fcVersion) {
            this.fcVersion = fcVersion;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getGroupName}
         * @param groupName Property groupName: Group name of the service.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getGroupName}
         * @param groupName Property groupName: Group name of the service.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getIps}
         * @param ips Property ips: List of IPs.
         * @return {@code this}
         */
        public Builder ips(com.aliyun.ros.cdk.core.IResolvable ips) {
            this.ips = ips;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getIps}
         * @param ips Property ips: List of IPs.
         * @return {@code this}
         */
        public Builder ips(java.util.List<? extends java.lang.Object> ips) {
            this.ips = ips;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getNamespace}
         * @param namespace Property namespace: Namespace of the service.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getNamespace}
         * @param namespace Property namespace: Namespace of the service.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getSaeAppId}
         * @param saeAppId Property saeAppId: SAE application ID.
         * @return {@code this}
         */
        public Builder saeAppId(java.lang.String saeAppId) {
            this.saeAppId = saeAppId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getSaeAppId}
         * @param saeAppId Property saeAppId: SAE application ID.
         * @return {@code this}
         */
        public Builder saeAppId(com.aliyun.ros.cdk.core.IResolvable saeAppId) {
            this.saeAppId = saeAppId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getServicePort}
         * @param servicePort Property servicePort: Port of the service.
         * @return {@code this}
         */
        public Builder servicePort(java.lang.Number servicePort) {
            this.servicePort = servicePort;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getServicePort}
         * @param servicePort Property servicePort: Port of the service.
         * @return {@code this}
         */
        public Builder servicePort(com.aliyun.ros.cdk.core.IResolvable servicePort) {
            this.servicePort = servicePort;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getServiceProtocol}
         * @param serviceProtocol Property serviceProtocol: Protocol of the service.
         * @return {@code this}
         */
        public Builder serviceProtocol(java.lang.String serviceProtocol) {
            this.serviceProtocol = serviceProtocol;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getServiceProtocol}
         * @param serviceProtocol Property serviceProtocol: Protocol of the service.
         * @return {@code this}
         */
        public Builder serviceProtocol(com.aliyun.ros.cdk.core.IResolvable serviceProtocol) {
            this.serviceProtocol = serviceProtocol;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getSourceId}
         * @param sourceId Property sourceId: Source ID of the service.
         *                 Used when specifying a source to add services.
         * @return {@code this}
         */
        public Builder sourceId(java.lang.Number sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getSourceId}
         * @param sourceId Property sourceId: Source ID of the service.
         *                 Used when specifying a source to add services.
         * @return {@code this}
         */
        public Builder sourceId(com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getTlsSetting}
         * @param tlsSetting Property tlsSetting: TLS settings for the service.
         * @return {@code this}
         */
        public Builder tlsSetting(com.aliyun.ros.cdk.core.IResolvable tlsSetting) {
            this.tlsSetting = tlsSetting;
            return this;
        }

        /**
         * Sets the value of {@link GatewayServiceProps#getTlsSetting}
         * @param tlsSetting Property tlsSetting: TLS settings for the service.
         * @return {@code this}
         */
        public Builder tlsSetting(java.util.Map<java.lang.String, ? extends java.lang.Object> tlsSetting) {
            this.tlsSetting = tlsSetting;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GatewayServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GatewayServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GatewayServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GatewayServiceProps {
        private final java.lang.Object gatewayUniqueId;
        private final java.lang.Object name;
        private final java.lang.Object sourceType;
        private final java.lang.Object dnsServerList;
        private final java.lang.Object fcAlias;
        private final java.lang.Object fcServiceName;
        private final java.lang.Object fcVersion;
        private final java.lang.Object groupName;
        private final java.lang.Object ips;
        private final java.lang.Object namespace;
        private final java.lang.Object saeAppId;
        private final java.lang.Object servicePort;
        private final java.lang.Object serviceProtocol;
        private final java.lang.Object sourceId;
        private final java.lang.Object tlsSetting;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayUniqueId = software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsServerList = software.amazon.jsii.Kernel.get(this, "dnsServerList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fcAlias = software.amazon.jsii.Kernel.get(this, "fcAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fcServiceName = software.amazon.jsii.Kernel.get(this, "fcServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fcVersion = software.amazon.jsii.Kernel.get(this, "fcVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ips = software.amazon.jsii.Kernel.get(this, "ips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.saeAppId = software.amazon.jsii.Kernel.get(this, "saeAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servicePort = software.amazon.jsii.Kernel.get(this, "servicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceProtocol = software.amazon.jsii.Kernel.get(this, "serviceProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceId = software.amazon.jsii.Kernel.get(this, "sourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsSetting = software.amazon.jsii.Kernel.get(this, "tlsSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayUniqueId = java.util.Objects.requireNonNull(builder.gatewayUniqueId, "gatewayUniqueId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
            this.dnsServerList = builder.dnsServerList;
            this.fcAlias = builder.fcAlias;
            this.fcServiceName = builder.fcServiceName;
            this.fcVersion = builder.fcVersion;
            this.groupName = builder.groupName;
            this.ips = builder.ips;
            this.namespace = builder.namespace;
            this.saeAppId = builder.saeAppId;
            this.servicePort = builder.servicePort;
            this.serviceProtocol = builder.serviceProtocol;
            this.sourceId = builder.sourceId;
            this.tlsSetting = builder.tlsSetting;
        }

        @Override
        public final java.lang.Object getGatewayUniqueId() {
            return this.gatewayUniqueId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getDnsServerList() {
            return this.dnsServerList;
        }

        @Override
        public final java.lang.Object getFcAlias() {
            return this.fcAlias;
        }

        @Override
        public final java.lang.Object getFcServiceName() {
            return this.fcServiceName;
        }

        @Override
        public final java.lang.Object getFcVersion() {
            return this.fcVersion;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getIps() {
            return this.ips;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getSaeAppId() {
            return this.saeAppId;
        }

        @Override
        public final java.lang.Object getServicePort() {
            return this.servicePort;
        }

        @Override
        public final java.lang.Object getServiceProtocol() {
            return this.serviceProtocol;
        }

        @Override
        public final java.lang.Object getSourceId() {
            return this.sourceId;
        }

        @Override
        public final java.lang.Object getTlsSetting() {
            return this.tlsSetting;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("gatewayUniqueId", om.valueToTree(this.getGatewayUniqueId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));
            if (this.getDnsServerList() != null) {
                data.set("dnsServerList", om.valueToTree(this.getDnsServerList()));
            }
            if (this.getFcAlias() != null) {
                data.set("fcAlias", om.valueToTree(this.getFcAlias()));
            }
            if (this.getFcServiceName() != null) {
                data.set("fcServiceName", om.valueToTree(this.getFcServiceName()));
            }
            if (this.getFcVersion() != null) {
                data.set("fcVersion", om.valueToTree(this.getFcVersion()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getIps() != null) {
                data.set("ips", om.valueToTree(this.getIps()));
            }
            if (this.getNamespace() != null) {
                data.set("namespace", om.valueToTree(this.getNamespace()));
            }
            if (this.getSaeAppId() != null) {
                data.set("saeAppId", om.valueToTree(this.getSaeAppId()));
            }
            if (this.getServicePort() != null) {
                data.set("servicePort", om.valueToTree(this.getServicePort()));
            }
            if (this.getServiceProtocol() != null) {
                data.set("serviceProtocol", om.valueToTree(this.getServiceProtocol()));
            }
            if (this.getSourceId() != null) {
                data.set("sourceId", om.valueToTree(this.getSourceId()));
            }
            if (this.getTlsSetting() != null) {
                data.set("tlsSetting", om.valueToTree(this.getTlsSetting()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.GatewayServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GatewayServiceProps.Jsii$Proxy that = (GatewayServiceProps.Jsii$Proxy) o;

            if (!gatewayUniqueId.equals(that.gatewayUniqueId)) return false;
            if (!name.equals(that.name)) return false;
            if (!sourceType.equals(that.sourceType)) return false;
            if (this.dnsServerList != null ? !this.dnsServerList.equals(that.dnsServerList) : that.dnsServerList != null) return false;
            if (this.fcAlias != null ? !this.fcAlias.equals(that.fcAlias) : that.fcAlias != null) return false;
            if (this.fcServiceName != null ? !this.fcServiceName.equals(that.fcServiceName) : that.fcServiceName != null) return false;
            if (this.fcVersion != null ? !this.fcVersion.equals(that.fcVersion) : that.fcVersion != null) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.ips != null ? !this.ips.equals(that.ips) : that.ips != null) return false;
            if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
            if (this.saeAppId != null ? !this.saeAppId.equals(that.saeAppId) : that.saeAppId != null) return false;
            if (this.servicePort != null ? !this.servicePort.equals(that.servicePort) : that.servicePort != null) return false;
            if (this.serviceProtocol != null ? !this.serviceProtocol.equals(that.serviceProtocol) : that.serviceProtocol != null) return false;
            if (this.sourceId != null ? !this.sourceId.equals(that.sourceId) : that.sourceId != null) return false;
            return this.tlsSetting != null ? this.tlsSetting.equals(that.tlsSetting) : that.tlsSetting == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayUniqueId.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.sourceType.hashCode());
            result = 31 * result + (this.dnsServerList != null ? this.dnsServerList.hashCode() : 0);
            result = 31 * result + (this.fcAlias != null ? this.fcAlias.hashCode() : 0);
            result = 31 * result + (this.fcServiceName != null ? this.fcServiceName.hashCode() : 0);
            result = 31 * result + (this.fcVersion != null ? this.fcVersion.hashCode() : 0);
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.ips != null ? this.ips.hashCode() : 0);
            result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
            result = 31 * result + (this.saeAppId != null ? this.saeAppId.hashCode() : 0);
            result = 31 * result + (this.servicePort != null ? this.servicePort.hashCode() : 0);
            result = 31 * result + (this.serviceProtocol != null ? this.serviceProtocol.hashCode() : 0);
            result = 31 * result + (this.sourceId != null ? this.sourceId.hashCode() : 0);
            result = 31 * result + (this.tlsSetting != null ? this.tlsSetting.hashCode() : 0);
            return result;
        }
    }
}
